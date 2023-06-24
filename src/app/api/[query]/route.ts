import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
export async function GET(request: Request, context: any) {
  const { query } = context.params;
  const user = await getCurrentUser();

  const searchResults = await prisma.media.findMany({
    where: {
      title: {
        contains: String(query),
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

  return NextResponse.json({ searchResults });
}
