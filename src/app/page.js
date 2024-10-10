'use client'

import AboutUs from "./components/AboutUs/AboutUs.js";
import Accost from "./components/Accost/Accost.js";
import CountersInfo from "./components/CotersInfo/CountersInfo.js";
import Header from "./components/Header/Header.js";
import InvestmentPlans from "./components/Investion/Investion.js";
import InvestmentCalculator from "./components/Investion/InvestmentCalculator.js";
import MenuOpen from "./components/MenuOpen/MenuOpen.js";
import Proects from "./components/Proects/Proects.js";
import StandWithUkrain from "./components/StandWithUkrain/stand_with_ukrain.js";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo.js";
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
      <WhatWeDo/>
      <InvestmentPlans/>
      <Proects/>
      
      {/* <Introductory/> */}
    </>
  );
}
