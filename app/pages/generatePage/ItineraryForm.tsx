"use client"
import {useState} from 'react'
import BasicButton from '@/app/atomic/BasicButton';
import Input from '@/app/atomic/Input';
import TextArea from '@/app/atomic/TextArea';
import {Plan} from '@/app/types/types';

interface ItineraryFormProps {
    plan: Plan,
    updateField: (field: keyof Plan, value: string | number) => void
}

function ItineraryForm({plan, updateField}: ItineraryFormProps) {

    return (
        <div className="flex flex-col gap-4 max-w-md">
          <Input
            label="Country"
            value={plan.country}
            placeholder="e.g. Japan"
            onChange={(val) => updateField('country', val)}
          />
          <Input
            label="No. of Days"
            value={plan.dateRange.toString()}
            placeholder="5"
            onChange={(val) => updateField('dateRange', parseInt(val) || 0)}
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


