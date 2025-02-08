import React, { useState } from 'react';
import { Coffee } from 'lucide-react';

export default function Kaffee() {
  const Kaffee1 = "Aroma";
  const Kaffee2 = "Geschmack";
  const [coffees] = useState([
    { name: "Espresso", description: "Strong and bold coffee.", price: "$2.50" },
    { name: "Latte", description: "Smooth and creamy.", price: "$3.50" },
    { name: "Cappuccino", description: "Rich with a foamy top.", price: "$3.00" }
  ]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold text-center mb-6">Our Coffee Selection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {coffees.map((coffee, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg text-center">
            <Coffee className="text-gray-600 mx-auto mb-2" size={32} />
            <h3 className="text-xl font-bold">{coffee.name}</h3>
            <p className="text-gray-600 mt-2">{coffee.description}</p>
            <p className="text-gray-700 font-semibold mt-2">{coffee.price}</p>
          </div>
        ))}
      </div>
      <img src="/api/placeholder/400/320" alt="Coffee" className="mt-6 mx-auto w-64 rounded-lg shadow-lg" />
      <h1 className="text-center text-2xl font-bold mt-4">Kaffee</h1>
      <p className="text-center text-gray-700">Der Kaffee ist fertig!</p>
      <ul className="list-disc list-inside mt-4 text-center">
        <li>Bonal</li>
        <li>{Kaffee1}</li>
        <li>{Kaffee2.toUpperCase()}</li>
        <li>1001</li>
      </ul>
    </div>
  );
}