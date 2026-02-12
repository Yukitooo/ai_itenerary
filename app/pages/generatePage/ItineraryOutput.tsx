"use client";

import React from 'react'
import Table from './Table'
import DaysButton from '@/app/atomic/DaysButton'

type OutputItineraryProps = {
    country: string;
    planDescription: string;
    data: any;
    dateRange: number;

}


function ItineraryOutput({country, planDescription, data, dateRange}: OutputItineraryProps) {
  return (
    <div className= "p-10 w-full flex align-center flex-col justify-center bg-gray-800">
          <h1 className="text-lg"> {country}</h1>
          <h3>{planDescription}</h3>
          <Table data={data} />
          <DaysButton dayNumber={dateRange} />
    </div>
  )
}

export default ItineraryOutput