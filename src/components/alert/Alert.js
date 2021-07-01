import React from "react";
import { FiAlertCircle } from "react-icons/fi";

export function Alert({ message }) {
  return (
    <div className="h-12 w90 m-4 bg-red-400 text-brand-secondaryText flex justify-center items-center font-semibold rounded  ">
      <FiAlertCircle />
      <h1 className="ml-2"> {message}</h1>
    </div>
  );
}
