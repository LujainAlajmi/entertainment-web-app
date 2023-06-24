"use server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { Media, User } from "@prisma/client";

import { revalidatePath, revalidateTag } from "next/cache";

export async function BookMark(media: FormData) {
  const user = await getCurrentUser();
  const id = media.get("id");

  //if bookmarked remove bookmark

  const isBookmarked = await prisma.media.findUnique({
    where: {
      id: String(id),
    },

    select: {
      users: {
        where: {
          id: user.id,
        },
      },
    },
  });

  if (isBookmarked?.users.length === 0) {
    const newmed = await prisma.media.update({
      where: {
        id: String(id),
      },
      include: {
        users: true,
      },
      data: {
        users: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    // revalidatePath("/");
    revalidateTag(String(id));
  } else {
    const newmed = await prisma.media.update({
      where: {
        id: String(id),
      },
      include: {
        users: true,
      },
      data: {
        users: {
          disconnect: {
            id: user.id,
          },
        },
      },
    });
    revalidateTag(String(id));
    // revalidatePath("/");
  }
}

export async function Search(search: string) {
  const user = await getCurrentUser();

  if (!search.trim()) {
    return [];
  }

  const searchResults = await prisma.media.findMany({
    where: {
      title: {
        contains: search.trim(),
        mode: "insensitive",
      },
    },
    include: {
      users: {
        where: {
          id: user.id,
        },
      },
    },
  });

  return searchResults;
}
