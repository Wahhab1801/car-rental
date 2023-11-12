// Modal.js
import React, { ReactNode } from "react";

interface ModalProps {
  header: string;
  isOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  header,
  isOpen,
  closeModal,
  children,
}) => {
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
        <div className="sticky top-0 bg-white p-4">
          <p className="text-lg font-bold inline">{header}</p>
          <button
            className="w-20 h-7 float-right border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
        <div className="max-h-screen p-4 overflow-y-auto">
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
