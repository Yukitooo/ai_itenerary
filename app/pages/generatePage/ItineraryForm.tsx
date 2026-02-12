"use client";
import BasicButton from "@/app/atomic/BasicButton";
import Input from "@/app/atomic/Input";
import TextArea from "@/app/atomic/TextArea";
import Dropdown from "@/app/atomic/Dropdown";
import { usePlannerState } from "@/app/statess/usePlannerState";
import { useToggleState } from "@/app/statess/useToggleState";

function ItineraryForm() {
  const {
    toggle: { showTable },
    toggleFunctions: { toggleTable },
  } = useToggleState();

  const {
    plan: { country, dateRange, planDescription },
    setCountry,
    setDateRange,
    setPlanDescription,
  } = usePlannerState();

  const noOfDays = [1, 2, 3, 4, 5, 6, 7];

  console.log(showTable);

  return (
    <div className="flex flex-col gap-4 max-w-md">
      <Input label="Country" placeholder="e.g. Japan" value={country} onChange={setCountry} />
      <Dropdown
        label="No. of Days"
        options={noOfDays}
        placeholder="Select duration of trip"
        value={dateRange}
        onChange={setDateRange}
      />
      <TextArea
        label="Describe your ideal itinerary"
        placeholder="I want my itinerary to be..."
        value={planDescription}
        onChange={setPlanDescription}
      />
      <BasicButton text="Generate Itinerary" onClick={toggleTable} />
      Country: {country}
      Data Range: {dateRange}
      Plan Description: {planDescription}
      Toggle Table: {showTable}
    </div>
  );
}

export default ItineraryForm;
