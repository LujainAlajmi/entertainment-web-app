import { getCurrentUser } from "@/lib/session";

import { Media, User } from "@prisma/client";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

import { BookMark } from "@/lib/actions";
import Display from "@/components/Display";
import SearchInput from "@/components/SearchInput";

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

      <h1>TV Series</h1>
      <Display
        media={tv as (Media & { users: User[] })[]}
        user={user}
        BookMark={BookMark}
      />
    </div>
  );
}
