import React from "react";
import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import { redirect } from "next/navigation";
export default async function SignupPage() {
  const user = await getCurrentUser();
  if (user) {
    redirect("/");
  }
  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-10 p-12 md:p-20">
      <div>
        <svg width="33" height="27" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m26.463.408 3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-3.2l3.2 6.4h-4.8l-3.2-6.4h-1.6a3.186 3.186 0 0 0-3.184 3.2l-.016 19.2a3.2 3.2 0 0 0 3.2 3.2h25.6a3.2 3.2 0 0 0 3.2-3.2V.408h-6.4Z"
            fill="#FC4747"
          />
        </svg>
      </div>
      <div className=" rounded-xl bg-[#161D2F] p-6">
        <Link href={"/api/auth/signin"}>
          <h1 className="text-3xl font-bold text-white">Sign up</h1>
        </Link>
      </div>
    </div>
  );
}
