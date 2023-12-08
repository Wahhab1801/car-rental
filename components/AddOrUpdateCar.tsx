"use client";
// AddOrUpdateCar.js
import React, { useEffect, useState } from "react";
import { VehicleForm } from "./VehicleForm";
import Modal from "./Modal";
import { Vehicle } from "@/types";
import Pagination from "./Pagination";
import CustomSelect from "./CustomSelect";
import { baseUrl } from "@/constants";
import { useRouter } from "next/navigation";

const AddOrUpdateCar = () => {
  const router = useRouter();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cars, setCars] = useState<Vehicle[]>([]);
  const [selectedCar, setSelectedCar] = useState<Vehicle | undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState<number>(5);
  const [selectedSold, setSelectedSold] = useState<string | undefined>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the authentication token exists in localStorage
    const authToken = localStorage.getItem("authToken");

    if (authToken) {
      // Token exists, user is authenticated
      setIsAuthenticated(true);
    } else {
      // Token does not exist, user is not authenticated
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  const handleLogout = () => {
    // Remove the authentication token from localStorage
    localStorage.removeItem("authToken");

    // Update the state to reflect the authentication status
    setIsAuthenticated(false);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSoldSelect = (filter: string | undefined) => {
    setSelectedSold(filter);
  };

  const handlePageSizeSelect = (filter: string | undefined) => {
    if (filter) setPageSize(+filter);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${baseUrl}/vehicles?skip=${
            (currentPage - 1) * pageSize
          }&take=${pageSize}${
            selectedSold !== undefined
              ? `&sold=${selectedSold === "sold" ? true : false}`
              : ""
          }${
            searchTerm ? `&registration=${encodeURIComponent(searchTerm)}` : ""
          }`
        );
        const result = await response.json();
        setCars(result.data);
        setTotalCount(result.total);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    fetchData();
  }, [currentPage, pageSize, selectedSold, searchTerm]);

  const openFormModal = (car?: Vehicle) => {
    setSelectedCar(car);
    setIsFormOpen(true);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      {!isAuthenticated ? (
        <div className="overflow-hidden">
          <div className="mt-20 padding-x padding-y max-width">
            <p>User is not authenticated.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 self-end"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </div>
      ) : (
        <main className="overflow-hidden">
          <div className="mt-20 padding-x padding-y max-width">
            <div className="p-4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => openFormModal()}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 self-end"
                >
                  Add Vehicle
                </button>
                <input
                  type="text"
                  placeholder="Search by Registration"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="border p-2 rounded-full w-80 border-gray-800"
                />
                <div className="home__filter-container">
                  <CustomSelect
                    title="Sold"
                    options={["sold", "not-sold"]}
                    onChange={handleSoldSelect}
                  />
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-4 self-end"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              </div>
              <div className="p-4">
                <Modal
                  header={selectedCar ? "Update Vehicle" : "Add Vehicle"}
                  isOpen={isFormOpen}
                  closeModal={closeFormModal}
                >
                  <VehicleForm
                    vehicle={selectedCar}
                    closeModal={closeFormModal}
                  />
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
                  {cars &&
                    cars.map((car) => (
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
              <div
                className="mt-4"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
                <div className="home__filter-container">
                  <CustomSelect
                    title="Table Size"
                    options={["5", "10", "15", "20"]}
                    onChange={handlePageSizeSelect}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default AddOrUpdateCar;
