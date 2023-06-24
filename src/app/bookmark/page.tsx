import { getCurrentUser } from "@/lib/session";

import { Media, User } from "@prisma/client";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BookMark } from "@/lib/actions";
import Display from "@/components/Display";
import SearchInput from "@/components/SearchInput";

export default async function BookMarkPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signup");
  }
  const Tv: { users: User[] }[] = await prisma.media.findMany({
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
  const bookmarkTv = Tv.filter((tv) => tv.users.length > 0);
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
  const bookmarkMovie = Movie.filter((movie) => movie.users.length > 0);

  return (
    <pre>
      <Link href="/api/auth/signout">
        <h1>Sign out</h1>
      </Link>
      <Link href="/movies">
        <h1>movies</h1>
      </Link>
      <Link href="/tv">
        <h1>tv</h1>
      </Link>
      <Link href="/bookmark">
        <h1>bookmark</h1>
      </Link>
      <hr />
      <h1>Search</h1>
      <SearchInput q="" />
      <br />
      <hr />
      <h1>Bookmarked Movies</h1>
      <Display
        media={bookmarkMovie as (Media & { users: User[] })[]}
        user={user}
        BookMark={BookMark}
      />
      <hr />
      <h1>Bookmarked Tv</h1>
      <Display
        media={bookmarkTv as (Media & { users: User[] })[]}
        user={user}
        BookMark={BookMark}
      />
    </pre>
  );
}
