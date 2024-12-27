import React from 'react';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import HouseCard from '../../components/HouseCard/HouseCard';

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <HouseCard />
      <Footer />
    </div>
  )
}

export default Home;