import Image from "next/image";
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars } from "@/utils";
import { FilterCarProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterCarProps;
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    model: searchParams.model || "",
    fuel: searchParams.fuel || "",
    year: searchParams.year || "2021",
    limit: searchParams.limit || 10,
  });
  const cars = allCars?.data;
  console.log("allCars", cars);
  const isDataEmpty = !Array.isArray(cars) || cars.length === 0 || !cars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Cars Catalogue</h1>
          <p>Explore the cars and you will find your dream ride</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
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
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{cars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
