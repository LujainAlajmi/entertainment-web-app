import { getCurrentUser } from "@/lib/session";

import { Media, User } from "@prisma/client";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BookMark } from "@/lib/actions";
import Display from "@/components/Display";
import SearchInput from "@/components/SearchInput";
import ScrollCard from "@/components/ScrollCard";
import MediaCard from "@/components/MediaCard";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signup");
  }
  const recommended: (Media & { users: User[] })[] =
    await prisma.media.findMany({
      where: {
        isTrending: false,
      },
      include: {
        users: {
          where: {
            id: user.id,
          },
        },
      },
    });
  const trending: (Media & { users: User[] })[] = await prisma.media.findMany({
    where: {
      isTrending: true,
    },
    include: {
      users: {
        where: {
          id: user.id,
        },
      },
    },
  });

  const data = await prisma.media.findMany({});

  return (
    <div>
      <SearchInput q="" placeholder="Search for movies or TV series" />

      <h1 className=" pt-3 text-xl font-light text-white md:text-3xl  ">
        Trending
      </h1>
      <div className=" flex w-full snap-x snap-proximity flex-row space-x-4 overflow-x-scroll scroll-smooth py-4 md:space-x-10 md:py-6">
        {trending.map((media) => (
          <ScrollCard
            media={media as Media & { users: User[] }}
            key={media.id}
            user={user}
            BookMark={BookMark}
          />
        ))}
      </div>

      <h1 className=" py-6 text-xl font-light text-white md:text-3xl">
        Recommended for you
      </h1>
      <div className=" columns-2 gap-4 space-y-4 md:columns-3 md:gap-7 md:space-y-6 lg:columns-4 lg:gap-10 lg:space-y-8 ">
        {recommended.map((media) => (
          <MediaCard
            key={media.id}
            media={media as Media & { users: User[] }}
            user={user}
            BookMark={BookMark}
          />
        ))}
      </div>
    </div>
  );
}
