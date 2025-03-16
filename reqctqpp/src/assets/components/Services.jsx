import { useState } from 'react';
import { Coffee, Users, Utensils, Gift, BookOpen, Clock } from "lucide-react";





export default function Services() {
  const [services] = useState([
    {
      icon: Coffee,
      name: "Coffee Tasting Workshops",
      description: "Join our expert baristas for guided tastings of premium coffee varieties from around the world.",
      price: "$50/session"
    },
    {
      icon: Users,
      name: "Private Events",
      description: "Host your special occasions in our elegant space with custom coffee bars.",
      price: "From $200"
    },
    {
      icon: Utensils,
      name: "Barista Training",
      description: "Learn the art of coffee making from our skilled baristas.",
      price: "$75/class"
    },
    {
      icon: Gift,
      name: "Coffee Subscriptions",
      description: "Receive freshly roasted premium coffee beans delivered monthly.",
      price: "$30/month"
    },
    {
      icon: BookOpen,
      name: "Coffee Library",
      description: "Access our collection of coffee-related books and resources.",
      price: "$15/visit"
    },
    {
      icon: Clock,
      name: "Coffee Consulting",
      description: "Professional consulting services for cafes and restaurants.",
      price: "Custom"
    }
  ]);

  return (
    <div className="coffee-container min-h-screen p-8">
      <h2 className="coffee-title text-4xl font-semibold text-center mb-12">Our Premium Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="coffee-card p-6 rounded-lg text-center">
              <Icon className="coffee-icon mx-auto mb-4" size={30} />
              <h3 className="text-2xl font-bold mb-3 text-coffee-accent">{service.name}</h3>
              <p className="coffee-description mb-4">{service.description}</p>
              <span className="price-tag">{service.price}</span>
            </div>
          );
        })}
      </div>
      
      <h1 className="coffee-title text-center text-3xl font-bold mt-8">Services</h1>
      <p className="text-center text-coffee-cream mt-3">Enhance your coffee experience!</p>
    </div>
  );
}