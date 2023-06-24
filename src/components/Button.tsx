"use client";
import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const Button = ({
  children,
  formAction,

  className,
}: {
  children: React.ReactNode;
  formAction?: () => void;

  className?: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className=" bg-blue-800"
      disabled={pending}
      formAction={formAction}
    >
      {pending ? "pending" : children}
    </button>
  );
};
