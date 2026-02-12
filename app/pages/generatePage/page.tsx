"use client";
import React from "react";
import Table from "./Table";
import ItineraryForm from "./ItineraryForm";
import { ItineraryRow } from "@/app/types/types";
import DaysButton from "@/app/atomic/DaysButton";
import { usePlannerState } from "@/app/statess/usePlannerState";
import ItineraryOutput from "./ItineraryOutput";
import { useToggleState } from "@/app/statess/useToggleState";

const data: ItineraryRow[] = [
  {
    time: "10:00 - 11:20",
    place: "Baguio Strawberry Farm",
    itineraryRowDescription: "Pick some strawberries",
  },
  {
    time: "2:00 - 4:30",
    place: "Baguio Lunch",
    itineraryRowDescription: "Eat very delicious soup",
  },
  {
    time: "2:00 - 4:30",
    place: "Baguio Lunch",
    itineraryRowDescription: "Eat very delicious soup",
  },
  {
    time: "2:00 - 4:30",
    place: "Baguio Lunch",
    itineraryRowDescription: "Eat very delicious soup",
  },
];

function Page() {
  const {
    plan: { country, dateRange, planDescription },
  } = usePlannerState();

  const {
    toggle: { showTable },
    toggleFunctions: { toggleTable },
  } = useToggleState();

  return (
    <main className="p-10 flex flex-col gap-10 h-screen">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Nicole's part */}
        <div className="w-full lg:w-1/2">
          <ItineraryForm />
        </div>

        <div className="p-10 w-full h-full flex align-center flex-col justify-center bg-gray-800">
          {showTable ? (
            <ItineraryOutput
              country={country}
              planDescription={planDescription}
              data={data}
              dateRange={dateRange}
            />
          ) : (
            <div className="flex align-center justify-center">
              <h1 className="">I will help you travel!</h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Page;
