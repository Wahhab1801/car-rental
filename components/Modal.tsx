// Modal.js
import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="fixed inset-0 bg-gray-600 opacity-50"
        onClick={closeModal}
      ></div>
      <div className="relative bg-white p-4 rounded-lg shadow-md max-w-screen-md w-full">
        <p
          className="absolute top-4 left-2 text-lg font-bold inline"
          onClick={closeModal}
        >
          Add Vehicle
        </p>
        <button
          className="absolute top-4 right-2 text-gray-600 hover:text-gray-800"
          onClick={closeModal}
        >
          Close
        </button>
        <div className="max-h-screen p-4 overflow-y-auto">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
