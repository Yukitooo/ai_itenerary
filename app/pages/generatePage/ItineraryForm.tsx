"use client"
import BasicButton from '@/app/atomic/BasicButton';
import Input from '@/app/atomic/Input';
import TextArea from '@/app/atomic/TextArea';
import {Plan} from '@/app/types/types';
import Dropdown from '@/app/atomic/Dropdown';

interface ItineraryFormProps {
    plan: Plan,
    updateField: (field: keyof Plan, value: string | number) => void
}

function ItineraryForm({plan, updateField}: ItineraryFormProps) {

    const noOfDays = [1,2,3,4,5,6,7]

    return (
        <div className="flex flex-col gap-4 max-w-md">
          <Input
            label="Country"
            value={plan.country}
            placeholder="e.g. Japan"
            onChange={(val) => updateField('country', val)}
          />

          <Dropdown
            label="No. of Days"
            value={plan.dateRange}
            options={noOfDays}
            placeholder="Select duration of trip"
            onChange={(val) => {
                updateField('dateRange', parseInt(val) || 0)
              }}
          />

          <TextArea 
            label="Describe your ideal itinerary"
            value={plan.planDescription}
            placeholder="I want my itinerary to be..."
            onChange={(val) => updateField('planDescription', val)}
          />

          <BasicButton text="Generate Itinerary" />
        </div>
    )
  
}

export default ItineraryForm


