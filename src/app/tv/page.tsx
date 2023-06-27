import { getCurrentUser } from "@/lib/session";

import { Media, User } from "@prisma/client";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BookMark } from "@/lib/actions";

import SearchInput from "@/components/SearchInput";
import MediaCard from "@/components/MediaCard";

export default async function TvPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signup");
  }
  const tv: (Media & { users: User[] })[] = await prisma.media.findMany({
    where: {
      category: "TV Series",
    },
    include: {
      users: {
        where: {
          id: user.id,
        },
      },
    },
  });
  return (
    <div>
      <SearchInput q="" placeholder="Search for TV series" />
      <h1 className=" py-6 text-xl font-light text-white md:text-3xl">
        TV Series
      </h1>
      <div className=" grid grid-cols-2 gap-4 md:grid-cols-3  md:gap-8 lg:grid-cols-4 lg:gap-10">
        {tv.map((media) => (
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
