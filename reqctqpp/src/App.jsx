import Header from './Header.jsx';
import Footer from './footer.jsx';
import Kaffee from './kaffee.jsx';
import React from 'react';

function App() {
  return(
    <div className="min-h-screen bg-gray-100">
    <Header />
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800">Welcome to our Coffee Shop</h2>
      <p className="mt-4 text-gray-600">Start exploring our delicious coffee selection!</p>
      <Kaffee/>
        <Footer/>
    </main>
  </div>

  )
}

export default App
