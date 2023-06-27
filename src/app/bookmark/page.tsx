import { getCurrentUser } from "@/lib/session";

import { Media, User } from "@prisma/client";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BookMark } from "@/lib/actions";

import SearchInput from "@/components/SearchInput";
import MediaCard from "@/components/MediaCard";

export default async function BookMarkPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signup");
  }
  const Tv: (Media & { users: User[] })[] = await prisma.media.findMany({
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
  const bookmarkTv: (Media & { users: User[] })[] = Tv.filter(
    (tv) => tv.users.length > 0
  );
  //get bookmarked movies

  const Movie: (Media & { users: User[] })[] = await prisma.media.findMany({
    where: {
      category: "Movie",
    },
    include: {
      users: {
        where: {
          id: user.id,
        },
      },
    },
  });
  const bookmarkMovie: (Media & { users: User[] })[] = Movie.filter(
    (movie) => movie.users.length > 0
  );

  return (
    <div>
      <SearchInput q="" placeholder="Search for bookmarked shows" />

      {bookmarkMovie?.length > 0 ? (
        <>
          {" "}
          <h1 className=" py-6 text-xl font-light text-white md:text-3xl">
            Bookmarked Movies
          </h1>
          <div className=" grid grid-cols-2 gap-4 md:grid-cols-3  md:gap-8 lg:grid-cols-4 lg:gap-10">
            {bookmarkMovie.map((media) => (
              <MediaCard
                key={media.id}
                media={media as Media & { users: User[] }}
                user={user}
                BookMark={BookMark}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className=" py-6 text-xl font-light text-white md:text-3xl">
            No Bookmarked Movies
          </h1>
        </>
      )}

      {bookmarkTv?.length > 0 ? (
        <>
          {" "}
          <h1 className=" py-6 text-xl font-light text-white md:text-3xl">
            Bookmarked TV Series
          </h1>
          <div className=" grid grid-cols-2 gap-4 md:grid-cols-3  md:gap-8 lg:grid-cols-4 lg:gap-10">
            {bookmarkTv.map((media) => (
              <MediaCard
                key={media.id}
                media={media as Media & { users: User[] }}
                user={user}
                BookMark={BookMark}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h1 className=" py-6 text-xl font-light text-white md:text-3xl">
            No Bookmarked TV Series
          </h1>
        </>
      )}
    </div>
  );
}
