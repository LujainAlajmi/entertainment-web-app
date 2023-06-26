"use client";
import React, { use } from "react";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { User } from "@prisma/client";
export default function NavBar() {
  const pathname = usePathname();

  return (
    <div className="flex h-14 w-screen flex-row items-center  justify-between bg-[#161D2F] p-4 md:mx-auto md:mt-6 md:w-[96%] md:rounded-xl md:p-6 lg:m-0 lg:mt-0 lg:min-h-screen lg:w-24 lg:flex-col">
      <img src="/assets/logo.svg" alt="" />
      <div className=" flex flex-row items-center space-x-7 bg-transparent lg:flex-col lg:items-center lg:space-x-0 lg:space-y-10  ">
        <Link href="/">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="group "
          >
            <path
              d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
              fill="#5A698F"
              className={cn(
                pathname === "/" ? "fill-white" : null,
                "group-hover:fill-[#FC4747]"
              )}
            />
          </svg>
        </Link>
        <Link href="/movies">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
              fill="#5A698F"
              className={cn(
                pathname === "/movies" ? "fill-white" : null,
                "group-hover:fill-[#FC4747]"
              )}
            />
          </svg>
        </Link>

        <Link href="/tv">
          <svg
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M20 4.481H9.08l2.7-3.278L10.22 0 7 3.909 3.78.029 2.22 1.203l2.7 3.278H0V20h20V4.481Zm-8 13.58H2V6.42h10v11.64Zm5-3.88h-2v-1.94h2v1.94Zm0-3.88h-2V8.36h2v1.94Z"
              fill="#5A698F"
              className={cn(
                pathname === "/tv" ? "fill-white" : null,
                "group-hover:fill-[#FC4747]"
              )}
            />
          </svg>
        </Link>

        <Link href="/bookmark">
          <svg
            width="17"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            className="group"
          >
            <path
              d="M15.387 0c.202 0 .396.04.581.119.291.115.522.295.694.542.172.247.258.52.258.82v17.038c0 .3-.086.573-.258.82a1.49 1.49 0 0 1-.694.542 1.49 1.49 0 0 1-.581.106c-.423 0-.79-.141-1.098-.423L8.46 13.959l-5.83 5.605c-.317.29-.682.436-1.097.436-.202 0-.396-.04-.581-.119a1.49 1.49 0 0 1-.694-.542A1.402 1.402 0 0 1 0 18.52V1.481c0-.3.086-.573.258-.82A1.49 1.49 0 0 1 .952.119C1.137.039 1.33 0 1.533 0h13.854Z"
              fill="#5A698F"
              className={cn(
                pathname === "/bookmark" ? "fill-white" : null,
                "group-hover:fill-[#FC4747]"
              )}
            />
          </svg>
        </Link>
      </div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className="hidden lg:block"></div>
      <div className=" bg-transparent">
        <Link href="/api/auth/signout">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#5A698F"
            className="h-6 w-6  bg-transparent hover:stroke-[#FC4747] md:h-8 md:w-8 lg:h-10 lg:w-10"
          >
            <path
              strokeLinecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
