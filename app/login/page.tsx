import React from "react";
import { FilterCarProps } from "@/types";
import LoginForm from "@/components/Login";

export default async function Page({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  return (
    <main className="overflow-hidden">
      <LoginForm />
    </main>
  );
}
