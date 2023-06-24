"use client";
import { Media, User } from "@prisma/client";

import React from "react";

import { Button } from "./Button";

export default function Display({
  media,
  user,
  BookMark,
}: {
  media: (Media & { users: User[] })[];
  user: User;
  BookMark: (media: FormData) => Promise<void>;
}) {
  return (
    <>
      {media.map((media) => (
        <div key={media.id}>
          <form action={BookMark} key={media.id}>
            <>
              {media.title} -{" "}
              {media.users[0]?.id === user.id ? "bookmarked" : "not bookmarked"}{" "}
              - {media.isTrending ? "trending" : "not trending"} -{" "}
            </>
            <input
              type="text"
              name="id"
              id="id"
              hidden
              defaultValue={media.id}
            />
            <Button>
              <>{media.users[0]?.id === user.id ? "unbookmark" : "bookmark"}</>
            </Button>
          </form>
        </div>
      ))}
    </>
  );
}
