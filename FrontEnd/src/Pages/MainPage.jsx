import React from "react";
import { Header } from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import CoinsCarousel from "../Components/CoinsCarousel";
import MarketTable from "../Components/MarketTable";
import HowItWorks from "../Components/HowItsWorks";
import WhatIsCryptox from "../Components/WhatIsCryptox";
import FreeYourMoney from "../Components/FreeYourMoney";
import Footer from "../Components/Footer";

const MainPage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <CoinsCarousel/>
      <MarketTable/>
      <HowItWorks/>
      <WhatIsCryptox/>
      <FreeYourMoney/>
      <Footer/>
    </div>
  );
};

export default MainPage;
