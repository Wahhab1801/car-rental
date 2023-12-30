import React, { useState, useEffect } from "react";
import { Vehicle } from "../types";
import "tailwindcss/tailwind.css";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import CloudinaryUploadWidget from "./CloudinaryUploader";
import {
  cloudinaryCloudName,
  cloudinaryUploadPreset,
  baseUrl,
} from "@/constants";
import axios from "axios"; // Import Axios for making HTTP requests

interface VehicleFormProps {
  vehicle?: Vehicle; // Pass the existing vehicle data for editing, if available
  closeModal: () => void;
}

export const VehicleForm: React.FC<VehicleFormProps> = ({
  vehicle,
  closeModal,
}) => {
  const [formData, setFormData] = useState<Vehicle>(vehicle || ({} as Vehicle));
  const [publicIds, setPublicIds] = useState<string[]>([]);
  const [uwConfig] = useState({
    cloudName: cloudinaryCloudName,
    uploadPreset: cloudinaryUploadPreset,
    cropping: false,
    multiple: true,
  });
  const [authToken, setAuthToken] = useState("");
  
  const cld = new Cloudinary({
    cloud: {
      cloudName: cloudinaryCloudName,
    },
  });

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) setAuthToken(token);
  }, []);

  useEffect(() => {
    if (vehicle) {
      const { id, ...formDataWithoutId } = vehicle;
      const dateOfRegistrationDate = new Date(vehicle.dateOfRegistration);
      const formattedDateOfRegistration = dateOfRegistrationDate
        .toISOString()
        .split("T")[0];
      setFormData({
        ...formDataWithoutId,
        dateOfRegistration: formattedDateOfRegistration,
      });
      setPublicIds(vehicle.images as string[]);
      console.log("publicIds", publicIds);
    } else {
      setFormData({} as Vehicle);
      setPublicIds([]);
    }
  }, [vehicle]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const body: Vehicle = {
        ...formData,
        ulezCompliant: formData.ulezCompliant === "true",
        sold: formData.sold === "true",
        unlist: formData.unlist === "true",
        images: publicIds,
        doors: formData?.doors ? +formData.doors : 0,
        seats: formData?.seats ? +formData.seats : 0,
        price: formData?.price ? +formData.price : 0,
        owners: formData?.owners ? +formData.owners : 0,
        year: formData?.year ? +formData.year : 0,
        mileage: formData?.mileage ? +formData.mileage : 0,
        dateOfRegistration: formData?.dateOfRegistration
          ? new Date(formData.dateOfRegistration).toISOString()
          : new Date().toISOString(),
      };
      if (vehicle) {
        let response;
        console.log("publicIds2", publicIds);

        if (publicIds.length) {
          response = await axios.patch(
            `${baseUrl}/vehicles/${vehicle.id}`,
            body,
            {
              headers: {
                "Content-Type": "application/json",
                authorization: authToken,
              },
            }
          );
          if (response.status >= 200 && response.status < 300) {
            closeModal();
            setFormData({} as Vehicle);
          }
        } else {
          alert("Please add pictures");
        }
      } else {
        let response;
        if (publicIds.length) {
          response = await axios.post(`${baseUrl}/vehicles`, body, {
            headers: {
              "Content-Type": "application/json",
              authorization: authToken,
            },
          });
          if (response.status >= 200 && response.status < 300) {
            closeModal();
            setFormData({} as Vehicle);
          }
        } else {
          alert("Please add pictures");
        }
      }
    } catch (error) {
      alert(`Vehicle creating failed: ${error}`);
      console.error("Error adding vehicle:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-screen-sm mx-auto p-6 bg-white shadow-md rounded-lg"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="make"
            className="block text-sm font-medium text-gray-700"
          >
            Make
          </label>
          <input
            type="text"
            id="make"
            name="make"
            value={formData?.make || ""}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-2 border-solid border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="model"
            className="block text-sm font-medium text-gray-700"
          >
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData?.model || ""}
            onChange={handleChange}
            required
            className="mt-1 block w-full border-solid border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData?.title || ""}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-solid border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="colour"
            className="block text-sm font-medium text-gray-700"
          >
            Colour
          </label>
          <input
            type="text"
            id="colour"
            name="colour"
            value={formData?.colour || ""}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData?.description || ""}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="vehicleCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Vehicle Category
          </label>
          <input
            type="text"
            id="vehicleCategory"
            name="vehicleCategory"
            value={formData?.vehicleCategory || "Car"}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="ulezCompliant"
            className="block text-sm font-medium text-gray-700"
          >
            ULEZ Compliant
          </label>
          <select
            id="ulezCompliant"
            name="ulezCompliant"
            value={formData?.ulezCompliant ? "true" : "false"}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="doors"
            className="block text-sm font-medium text-gray-700"
          >
            Doors
          </label>
          <input
            type="number"
            id="doors"
            name="doors"
            value={formData?.doors || ""}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="seats"
            className="block text-sm font-medium text-gray-700"
          >
            Seats
          </label>
          <input
            type="number"
            id="seats"
            name="seats"
            value={formData?.seats || ""}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="dateOfRegistration"
          className="block text-sm font-medium text-gray-700"
        >
          Date of Registration
        </label>
        <input
          type="date"
          id="dateOfRegistration"
          name="dateOfRegistration"
          value={formData?.dateOfRegistration || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="registration"
          className="block text-sm font-medium text-gray-700"
        >
          Registration
        </label>
        <input
          type="text"
          id="registration"
          name="registration"
          value={formData?.registration || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700"
        >
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData?.price || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <label
            htmlFor="sold"
            className="block text-sm font-medium text-gray-700"
          >
            Sold
          </label>
          <select
            id="sold"
            name="sold"
            value={formData?.sold ? "true" : "false"}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="unlist"
            className="block text-sm font-medium text-gray-700"
          >
            Unlist
          </label>
          <select
            id="unlist"
            name="unlist"
            value={formData?.unlist ? "true" : "false"}
            onChange={handleChange}
            className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
      </div>

      <div className="mt-4">
        <label
          htmlFor="bodyType"
          className="block text-sm font-medium text-gray-700"
        >
          Body Type
        </label>
        <input
          type="text"
          id="bodyType"
          name="bodyType"
          value={formData?.bodyType || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="fuel"
          className="block text-sm font-medium text-gray-700"
        >
          Fuel
        </label>
        <input
          type="text"
          id="fuel"
          name="fuel"
          value={formData?.fuel || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="transmission"
          className="block text-sm font-medium text-gray-700"
        >
          Transmission
        </label>
        <input
          type="text"
          id="transmission"
          name="transmission"
          value={formData?.transmission || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="owners"
          className="block text-sm font-medium text-gray-700"
        >
          Owners
        </label>
        <input
          type="number"
          id="owners"
          name="owners"
          value={formData?.owners || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus-border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="year"
          className="block text-sm font-medium text-gray-700"
        >
          Year
        </label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData?.year || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="mileage"
          className="block text-sm font-medium text-gray-700"
        >
          Mileage
        </label>
        <input
          type="number"
          id="mileage"
          name="mileage"
          value={formData?.mileage || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="emissionClass"
          className="block text-sm font-medium text-gray-700"
        >
          Emission Class
        </label>
        <input
          type="text"
          id="emissionClass"
          name="emissionClass"
          value={formData?.emissionClass || ""}
          onChange={handleChange}
          className="mt-1 block w-full border-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="emissionClass"
          className="block text-sm font-medium text-gray-700"
        >
          Images
        </label>
        <CloudinaryUploadWidget
          uwConfig={uwConfig}
          prevPublicIds={publicIds}
          setPublicIds={setPublicIds}
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {publicIds?.map((publicId) => (
            <div key={publicId} style={{ margin: "8px", maxWidth: "200px" }}>
              <AdvancedImage
                cldImg={cld.image(publicId)}
                plugins={[responsive(), placeholder()]}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {vehicle ? "Update Vehicle" : "Add Vehicle"}
        </button>
      </div>
    </form>
  );
};
