import Header from './Header.jsx';
import Footer from './footer.jsx';
import Kaffee from './kaffee.jsx';
import React from 'react';
import './index.css'

function App() {
  return(
   <div>
     <Header/>
  
    <main class="container">
  <h2>Welcome to our Coffee Shop</h2>
  <p>Start exploring our delicious coffee selection!</p>

      <Kaffee/>
        <Footer/>
    </main>
    </div>


  )
}

export default App
