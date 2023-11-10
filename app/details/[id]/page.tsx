import React from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import DetailsPage from "@/components/details/DetailsPage";

const Page: React.FC<Params> = ({ params }) => {
  console.log(params);
  return (
    <main className="overflow-hidden pt-20">
      <DetailsPage {...params} />
    </main>
  );
};

export default Page;
