import React from 'react'
import Table from './Table'

 const data = [
    { name: "Anna", age: 23, city: "Manila" },
    { name: "Mark", age: 30, city: "Cebu" },
  ];
function page() {
  return (
      <div className="w-full p-4 box-border">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-600">
            <th className="border border-gray-300 px-4 py-3 text-left">
              Name
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              Age
            </th>
            <th className="border border-gray-300 px-4 py-3 text-left">
              City
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-3">
                {item.name}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {item.age}
              </td>
              <td className="border border-gray-300 px-4 py-3">
                {item.city}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default page