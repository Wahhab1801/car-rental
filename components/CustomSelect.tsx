// CustomSelect.js
import React from "react";

interface CustomFilterProps {
  title: string;
  options: string[];
  onChange: (selectedFilter: string | undefined) => void;
}

const CustomSelect: React.FC<CustomFilterProps> = ({
  title,
  options,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <select
        onChange={(e) =>
          onChange(e.target.value !== "" ? e.target.value : undefined)
        }
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select {title}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
