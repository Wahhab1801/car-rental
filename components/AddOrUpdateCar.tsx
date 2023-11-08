// AddOrUpdateCar.js
import React, { useEffect, useState } from "react";
import { VehicleForm } from "./VehicleForm";
import Modal from "./Modal";
import { fetchCars } from "@/utils";
import { CarProps } from "@/types";

const AddOrUpdateCar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cars, setCars] = useState<CarProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchCars();
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    fetchData();
  }, []);

  const openFormModal = () => {
    setIsFormOpen(true);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="AddOrUpdateCar">
      <div className="p-4">
        <button
          onClick={openFormModal}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add Vehicle
        </button>
        <div className="p-4">
          <Modal isOpen={isFormOpen} closeModal={closeFormModal}>
            <VehicleForm />
          </Modal>
        </div>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="text-left">ID</th>
              <th className="text-left">Make</th>
              <th className="text-left">Model</th>
              <th className="text-left">Registration</th>
              <th className="text-left">Sold</th>
              <th className="text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((car) => (
              <tr key={car.id}>
                <td>{car.id}</td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.registration}</td>
                <td>{car.sold ? "Yes" : "No"}</td>
                <td>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddOrUpdateCar;
