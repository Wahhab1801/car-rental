"use client";
// AddOrUpdateCar.js
import React, { useEffect, useState } from "react";
import { VehicleForm } from "./VehicleForm";
import Modal from "./Modal";
import { fetchCars } from "@/utils";
import { Vehicle } from "@/types";

const AddOrUpdateCar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cars, setCars] = useState<Vehicle[]>([]);
  const [selectedCar, setSelectedCar] = useState<Vehicle | undefined>();

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

  const openFormModal = (car?: Vehicle) => {
    setSelectedCar(car);
    setIsFormOpen(true);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
  };

  return (
    <main className="overflow-hidden">
      <div className="mt-20 padding-x padding-y max-width">
        <div className="p-4">
          <button
            onClick={() => openFormModal()}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 self-end"
          >
            Add Vehicle
          </button>
          <div className="p-4">
            <Modal
              header={selectedCar ? "Update Vehicle" : "Add Vehicle"}
              isOpen={isFormOpen}
              closeModal={closeFormModal}
            >
              <VehicleForm vehicle={selectedCar} closeModal={closeFormModal} />
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
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => openFormModal(car)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default AddOrUpdateCar;
