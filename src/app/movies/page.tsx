import { getCurrentUser } from "@/lib/session";

import { Media, User } from "@prisma/client";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BookMark } from "@/lib/actions";
import Display from "@/components/Display";
import SearchInput from "@/components/SearchInput";

export default async function MoviesPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/signup");
  }
  const movie: (Media & { users: User[] })[] = await prisma.media.findMany({
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
  return (
    <div>
      <SearchInput q="" placeholder="Search for movies" />

      <h1>TV Series</h1>
      <Display
        media={movie as (Media & { users: User[] })[]}
        user={user}
        BookMark={BookMark}
      />
    </div>
  );
}
