
export const fetchCars = async () => {
  const headers = {
    "X-RapidAPI-Key": "cf30120f9amsh82f6df583ebe966p13c03ejsne2b394f52ae7",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();
  return result;
};

