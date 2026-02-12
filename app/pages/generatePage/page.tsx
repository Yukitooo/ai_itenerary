"use client";
import React from "react";
import Table from "./Table";
import ItineraryForm from "./ItineraryForm";
import { ItineraryRow } from "@/app/types/types";
import DaysButton from "@/app/atomic/DaysButton";
import { usePlannerState } from "@/app/statess/usePlannerState";
import ItineraryOutput from "./ItineraryOutput";

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

  return (
    <main className="p-10 flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Nicole's part */}
        <div className="w-full lg:w-1/2">
          <ItineraryForm />
        </div>

        <ItineraryOutput country={country} planDescription={planDescription} data={data}  dateRange={dateRange}/ >
      </div>
    </main>
  );
}

export default Page;
