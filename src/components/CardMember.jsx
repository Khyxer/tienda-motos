import React from "react";
import { Card } from "flowbite-react";

const CardMember = ({ plan, precio, beneficios }) => {
  return (
    <>
      <Card className="max-w-sm">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          {plan}
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">
            {precio}
          </span>
          <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /mes
          </span>
        </div>
        <ul className="my-7 space-y-5">
          {beneficios.map((beneficio) => (
            <li className="flex space-x-3">
              <svg
                className="h-5 w-5 shrink-0 text-sky-500 "
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                {beneficio}
              </span>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="inline-flex w-full justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-900"
        >
          Seleccionar plan
        </button>
      </Card>
    </>
  );
};

export default CardMember;
