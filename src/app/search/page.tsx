import React from "react";
import { Media, User } from "@prisma/client";
import SearchInput from "@/components/SearchInput";
import { getCurrentUser } from "@/lib/session";
import Display from "@/components/Display";
import { BookMark, Search } from "@/lib/actions";
export default async function QPage({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) {
  const data = await Search(q);
  const user = await getCurrentUser();

  return (
    <div>
      <SearchInput q={q} />
      <Display
        media={data as (Media & { users: User[] })[]}
        user={user}
        BookMark={BookMark}
      />
    </div>
  );
}
