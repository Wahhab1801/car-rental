"use client";

import { FilterCarProps, Vehicle } from "@/types";
import { CarCard, ShowMore } from ".";
import { useEffect, useState } from "react";
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
  const cars: Vehicle[] = data?.data || [];
  const isDataEmpty = !Array.isArray(cars) || cars.length === 0 || !cars;
  useEffect(() => {
    searchParams.unlist = false;

    fetchCarsAxios(searchParams)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Fetching error:", error);
        setData({ message: error.message, total: 0 });
      });
  }, [searchParams]);

  return (
    <>
      {!isDataEmpty ? (
        <section id="cars">
          <div className="home__cars-wrapper">
            {cars.map((car) => (
              <CarCard car={car} key={car.id} />
            ))}
          </div>

          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > cars.length}
          />
        </section>
      ) : (
        <section id="cars" className="home__error-container">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          {data?.message && <p>{data?.message}</p>}
        </section>
      )}
    </>
  );
};

export default MainPage;
