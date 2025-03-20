import React from 'react';
import data from '../About.json';

function IssuesList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <img
            src={item.image}
            alt={item.issue}
            className="w-48 h-48 object-cover rounded-md"
          />
          <h3 className="text-lg font-semibold mt-4">{item.issue}</h3>
          <p className="text-gray-500 mt-2">{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default IssuesList;