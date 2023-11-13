"use client";
import React from "react";
import DetailsPage from "@/components/details/DetailsPage";
import { useParams } from "next/navigation";

const Page: React.FC = () => {
  const params = useParams();
  return (
    <main className="overflow-hidden pt-20">
      <DetailsPage {...params} />
    </main>
  );
};

export default Page;
