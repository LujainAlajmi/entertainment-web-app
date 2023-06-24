import { getCurrentUser } from "@/lib/session";

import { Media, User } from "@prisma/client";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BookMark } from "@/lib/actions";
import Display from "@/components/Display";
import SearchInput from "@/components/SearchInput";

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
      <h1>Trending</h1>
      <Display
        media={trending as (Media & { users: User[] })[]}
        user={user}
        BookMark={BookMark}
      />
      <hr />
      <h1>Recommended</h1>
      <Display
        media={recommended as (Media & { users: User[] })[]}
        user={user}
        BookMark={BookMark}
      />
    </pre>
  );
}
