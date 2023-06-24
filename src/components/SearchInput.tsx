"use client";
import React from "react";

import { useRouter } from "next/navigation";
export default function SearchInput({ q }: { q: string }) {
  const router = useRouter();
  return (
    <input
      type="text"
      id="search"
      defaultValue={q}
      placeholder="Search"
      className="border border-gray-400 p-2 rounded-lg w-full mt-5 text-black"
      onChange={async (evt) => {
        if (evt.target.value.trim() === "") {
          router.push(`/`);
          return;
        }
        router.push(`/search?q=${evt.target.value}`);

        // const data = await search(evt.target.value);
        // setSearched(data as (Media & { users: User[] })[]);
      }}
    />
  );
}
