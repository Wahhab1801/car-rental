import React from "react";

import { FilterCarProps } from "@/types";
import HeroSecondary from "@/components/HeroSecondary";

type Props = {};

export default async function Page({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  return (
    <main className="overflow-hidden">
      {/* <HeroSecondary /> */}
      <section className="padding-x padding-y w-full overflow-hidden">
        <div
          className="px-6 py-10 mx-auto w-full"
          style={{
            height: "35rem",
          }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            style={{
              marginTop: "-8rem",
            }}
            src="https://choosemycar.com/dealer-form/337580832"
          ></iframe>
        </div>
      </section>
    </main>
  );
}
