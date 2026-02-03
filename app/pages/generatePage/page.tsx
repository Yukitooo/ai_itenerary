"use client";
import React from "react";
import Table from "./Table";
import ItineraryForm from "./ItineraryForm";
import { ItineraryRow } from "@/app/types/types";
import DaysButton from "@/app/atomic/DaysButton";
import { usePlannerState } from "@/app/statess/usePlannerState";

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
    <main className="p-10 flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        {/* Nicole's part */}
        <div className="w-full lg:w-1/3">
          <ItineraryForm />
        </div>

        <div className="w-full lg:w-2/3 lg:pl-10">
          <h1> {country}</h1>
          <h3>{planDescription}</h3>
          <Table data={data} />
          <DaysButton dayNumber={dateRange} />
        </div>
      </div>
    </main>
  );
}

export default Page;
