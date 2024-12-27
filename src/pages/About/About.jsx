import React from 'react';
import Header from '../../components/Header/Header';
import BannerAbout from '../../components/Banner/BannerAbout/BannerAbout';
import {MenuCollapsed} from '../../components/Collapse/Collapse';
import Footer from '../../components/Footer/Footer';

function About() {
  return (
    <>
      <Header />
      <BannerAbout />
      <MenuCollapsed />
      <Footer />
    </>
  )
}

export default About;