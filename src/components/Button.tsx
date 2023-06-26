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
      className={className}
      type="submit"
      disabled={pending}
      formAction={formAction}
    >
      {children}
    </button>
  );
};
