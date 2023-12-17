import React from "react";
import { FilterCarProps } from "@/types";
import HeroSecondary from "@/components/HeroSecondary";
import ContactUsWrapper from "@/components/ContactUsWrapper";

export default async function Page({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  return (
    <main className="overflow-hidden">
      {/* <HeroSecondary /> */}
      <ContactUsWrapper />
    </main>
  );
}
