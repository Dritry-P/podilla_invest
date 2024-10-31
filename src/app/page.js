'use client'

import AboutUs from "./components/AboutUs/AboutUs.js";
import Accost from "./components/Accost/Accost.js";
import CountersInfo from "./components/CotersInfo/CountersInfo.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import InvestmentBlock from "./components/Investion/Investion.js";
import InvestmentCalculator from "./components/Investion/InvestmentCalculator.js";
import MenuOpen from "./components/MenuOpen/MenuOpen.js";
import Proects from "./components/Proects/Proects.js";
import Services from "./components/Services'/Services.jsx";
import StandWithUkrain from "./components/StandWithUkrain/stand_with_ukrain.js";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo.js";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs.jsx";
// import Introductory from "./components/Introductory/introductory.js";

export default function Home() {
  return (
    <>
      <StandWithUkrain/>
      <Header/>
      <MenuOpen/>
      <Accost/>
      <AboutUs/>
      <CountersInfo/>
      <WhyChooseUs/>
      <WhatWeDo/>
      <Services/>
      <InvestmentBlock/>
      <Proects/>
      <Footer/>
      {/* <Introductory/> */}
    </>
  );
}
