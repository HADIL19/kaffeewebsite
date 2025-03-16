import  { useState } from 'react';
import { Coffee } from 'lucide-react';




export default function Kaffee() {

  const [coffees] = useState([
    { name: "Espresso", description: "Strong and bold coffee.", price: "$2.50" },
    { name: "Latte", description: "Smooth and creamy.", price: "$3.50" },
    { name: "Cappuccino", description: "Rich with a foamy top.", price: "$3.00" },
    { name: "Mocha", description: "Chocolatey and sweet.", price: "$4.00" }

  ]);

  return (
    <div className="coffee-container min-h-screen p-8">
      <h2 className="coffee-title text-4xl font-semibold text-center mb-12">Our Coffee Selection</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {coffees.map((coffee, index) => (
          <div key={index} className="coffee-card p-6 rounded-lg text-center">
            <Coffee className="coffee-icon mx-auto mb-4" size={40} />
            <h3 className="text-2xl font-bold mb-3 text-coffee-accent">{coffee.name}</h3>
            <p className="coffee-description mb-4">{coffee.description}</p>
            <span className="price-tag">{coffee.price}</span>
            
          </div>
        ))}
      </div>
       
         
      <h1 className="coffee-title text-center text-3xl font-bold mt-8">Kaffee</h1>
      <p className="text-center text-coffee-cream mt-3">Der Kaffee ist fertig!</p>
    </div>
  );
}