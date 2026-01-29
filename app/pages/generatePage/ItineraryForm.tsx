"use client";
import BasicButton from "@/app/atomic/BasicButton";
import Input from "@/app/atomic/Input";
import TextArea from "@/app/atomic/TextArea";
import { Plan } from "@/app/types/types";
import Dropdown from "@/app/atomic/Dropdown";

function ItineraryForm() {
  const noOfDays = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <Input label="Country" placeholder="e.g. Japan" />

      <Dropdown
        label="No. of Days"
        options={noOfDays}
        placeholder="Select duration of trip"
      />

      <TextArea
        label="Describe your ideal itinerary"
        placeholder="I want my itinerary to be..."
      />

      <BasicButton text="Generate Itinerary" />
    </div>
  );
}

export default ItineraryForm;
