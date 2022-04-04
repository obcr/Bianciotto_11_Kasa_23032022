import React from 'react';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import SectionTop from '../../components/SectionTop';
import Footer from '../../components/Footer';



const Home = () => {
  return (
    <div>
      <Header/>
      <SectionTop/>
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;

