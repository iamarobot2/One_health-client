import React from 'react';

export default function Insurances() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-left">INSURANCES</h1>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search insurance..."
          className="p-3 w-full border shadow-md"
        />
      </div>
      <div className="shadow-xl">
        <table className="w-full table-auto bg-white divide-y divide-gray-200 border border-gray-200 rounded">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border">ID</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="py-2 px-4 border text-center">1</td>
              <td className="py-2 px-4 border">Insurance Company A</td>
              <td className="py-2 px-4 border">Health</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 border text-center">2</td>
              <td className="py-2 px-4 border">Insurance Company B</td>
              <td className="py-2 px-4 border">Life</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 border text-center">3</td>
              <td className="py-2 px-4 border">Insurance Company C</td>
              <td className="py-2 px-4 border">Auto</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 border text-center">4</td>
              <td className="py-2 px-4 border">Insurance Company D</td>
              <td className="py-2 px-4 border">Home</td>
            </tr>
            <tr className="bg-white">
              <td className="py-2 px-4 border text-center">5</td>
              <td className="py-2 px-4 border">Insurance Company E</td>
              <td className="py-2 px-4 border">Travel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
