import React from 'react';
// import { ReactDOM } from 'react';
import Navbar from "./components/navbar/Navbar";
import Landingpage from './components/LandingPage';
import Footer from './components/Footer';
import './index.css'

function App() {
  return (
    <div className='bg-[#040c18]'>
      <Navbar />
      <Landingpage />
      <Footer/>
    </div>
  );
}

export default App;
