import React from "react";

const HeroSection = () => {
  return (
    <div className="hero bg-black min-h-screen px-6 text-white">
      <div className="hero-content flex-col lg:flex-row-reverse items-center">
        <img
          src="CryptoImg.png"
          alt="Crypto Illustration"
          className="max-w-lg rounded-lg bg-transparent"
          
        />
        <div className="text-left lg:pr-10">
          <h1 className="text-6xl font-bold leading-tight">
            Buy & Sell Digital <br /> Assets In The <br /> CryptoX
          </h1>
          <p className="py-6 text-lg">
            Coin CryptoxX is the easiest, safest, and fastest way to buy & sell
            crypto asset exchange.
          </p>
          <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full px-6 py-3">
            Get started now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
