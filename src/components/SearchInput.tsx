"use client";
import React from "react";

import { useRouter } from "next/navigation";
export default function SearchInput({
  q,
  placeholder,
}: {
  q: string;
  placeholder: string;
}) {
  const router = useRouter();
  return (
    <div className=" flex w-full flex-row  items-center space-x-4    lg:px-0 lg:pt-5">
      <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z"
          fill="#FFF"
        />
      </svg>
      <input
        type="text"
        id="search"
        defaultValue={q}
        placeholder={placeholder}
        className="w-full  appearance-none  bg-transparent p-2 text-base font-thin text-white caret-[#FC4747] placeholder:text-white/50 focus:border-b focus:border-white/50  focus:outline-none focus:ring-0 active:border-b active:border-white/50 md:text-2xl"
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
    </div>
  );
}
