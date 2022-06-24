import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './Components/Navbar';
import Gallery from './Components/Gallery';
import Footer from './Components/Footer';

export default function App() {
  return (
    <>
        <Helmet>
            <script src="script.js" async></script>
        </Helmet>

        <Navbar/>
        <Gallery/>
        <Footer/>
    </>
  )
}
