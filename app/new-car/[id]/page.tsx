"use client";
import { VehicleForm } from "@/components/VehicleForm";
import { useParams } from "next/navigation";

function NewCar() {
  const params = useParams();

  return (
    <>
      <VehicleForm {...params} />
    </>
  );
}

export default NewCar;
