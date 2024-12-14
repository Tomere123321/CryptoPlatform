import React from "react";

const WhatIsCryptox = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
          <img
            src="laptop-mockup.png"
            alt="Crypto Platform Mockup"
            className="w-3/4 lg:w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">What Is Cryptex</h2>
          <p className="text-gray-400 mb-6">
            Experience a variety of trading on Bitcost. You can use various types
            of coin transactions such as Spot Trade, Futures Trade, P2P, Staking,
            Mining, and margin.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {/* Feature 1 */}
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-6-8.28"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">View real-time cryptocurrency prices</h3>
                <p className="text-gray-400">
                  Experience a variety of trading on Bitcost. You can use various types
                  of coin transactions such as Spot Trade, Futures Trade, P2P, Staking,
                  Mining, and margin.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start">
              <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-6-8.28"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
                <p className="text-gray-400">
                  Experience a variety of trading on Bitcost. You can use various types
                  of coin transactions such as Spot Trade, Futures Trade, P2P, Staking,
                  Mining, and margin.
                </p>
              </div>
            </div>
          </div>

          {/* Explore More Button */}
          <div className="mt-8">
            <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full px-6 py-3">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsCryptox;
