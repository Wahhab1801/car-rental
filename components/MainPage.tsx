"use client";

import { FilterCarProps, Vehicle } from "@/types";
// import React, { useState, useEffect } from "react";
import { CarCard, ShowMore } from ".";
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchCarsAxios } from "@/utils";

type Props = {
  searchParams: FilterCarProps;
};

const MainPage = (props: Props) => {
  let { searchParams } = props;
  const [data, setData] = useState<{
    data?: Vehicle[];
    message: string;
    total: number;
  }>();
  const [allCars, setAllCars] = useState<Vehicle[]>([]);
  const cars: Vehicle[] = data?.data || [];
  const isDataEmpty = !Array.isArray(cars) || cars.length === 0 || !cars;
  useEffect(() => {
    fetchCarsAxios(searchParams)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        // const data = response.data;
        // setAllCars(data.data);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
        setData({ message: error.message, total: 0 });
      });
  }, [searchParams]);

  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {cars.map((car) => (
              <CarCard car={car} />
            ))}
          </div>

          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > cars.length}
          />
        </section>
      ) : (
        <section className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          {data?.message && <p>{data?.message}</p>}
        </section>
      )}
    </>
  );
};

export default MainPage;
