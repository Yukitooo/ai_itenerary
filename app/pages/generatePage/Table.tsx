import React from "react";
import { ItineraryRow } from "@/app/types/types";
import { usePlannerState } from "@/app/statess/usePlannerState";

type TableRows = {
  data: ItineraryRow[];
};



function Table({ data }: TableRows) {

  const {
    plan: {
      country,
      dateRange,
      planDescription},
    plannerFunctions: {
      setCountry,
      setDateRange,
      setPlanDescription,}
  } = usePlannerState();
  return (
    <div className="w-full p-4 box-border">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-600">
            <th className="border border-gray-300 px-4 py-3 text-left">Time</th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Place
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Description
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-900 cursor-pointer">
              <td className="border border-gray-300 px-4 py-3">{item.time}</td>
              <td className="border border-gray-300 px-4 py-3">{item.place}</td>
              <td className="border border-gray-300 px-4 py-3">
                {item.itineraryRowDescription}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
