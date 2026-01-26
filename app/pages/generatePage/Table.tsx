import React from 'react'
import { ItineraryRow, Itinerary, ItineraryDay} from '@/app/types/types';

const data: ItineraryRow[] = [
    { time: "10:00 - 11:20", place: "Baguio Strawberry Farm", itineraryRowDescription: "Pick some strawberries" },
    { time: "2:00 - 4:30", place: "Baguio Lunch", itineraryRowDescription: "Eat very delicious soup" },
  ];

function Table() {
  
   return (
      <div className="w-full p-4 box-border">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-600">
            <th className="border border-gray-300 px-4 py-3 text-left">
              Time
            </th>
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
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">
                {item.time}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {item.place}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {item.itineraryRowDescription}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table