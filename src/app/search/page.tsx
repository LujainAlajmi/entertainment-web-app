import React from "react";
import { Media, User } from "@prisma/client";
import SearchInput from "@/components/SearchInput";
import { getCurrentUser } from "@/lib/session";

import { BookMark, Search } from "@/lib/actions";
import MediaCard from "@/components/MediaCard";
export default async function QPage({
  searchParams: { q },
}: {
  searchParams: { q: string };
}) {
  const data = await Search(q);
  const user = await getCurrentUser();

  return (
    <div className="h-full w-full">
      <SearchInput q={q} placeholder="Search for movies or TV series" />

      {data.length === 0 ? (
        <h1 className="pt-6 text-xl font-light text-white md:pt-8">
          No results
        </h1>
      ) : (
        <h1 className="pt-6 text-xl font-light text-white  md:pt-8">
          Found {data.length} results for &apos;{q}&apos;
        </h1>
      )}
      <div className="h-full w-full pt-6 lg:pt-8">
        <div className="  grid grid-cols-2 gap-4 md:grid-cols-3  md:gap-8 lg:grid-cols-4 lg:gap-10 ">
          {data.map((media) => (
            <MediaCard
              key={media.id}
              media={media as Media & { users: User[] }}
              user={user}
              BookMark={BookMark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
