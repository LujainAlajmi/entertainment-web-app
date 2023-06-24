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
    <div>
      <Link href="/api/auth/signin">
        <h1>Sign up</h1>
      </Link>
    </div>
  );
}
