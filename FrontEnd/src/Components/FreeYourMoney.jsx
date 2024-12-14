import React from "react";

const FreeYourMoney = () => {
  return (
    <div className="bg-black text-white py-16 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            Free Your Money & <br /> Invest With Confidence
          </h2>
          <p className="text-gray-400 mb-6">
            With Cryptor Trade, you can be sure your trading skills are matched.
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
                <h3 className="text-xl font-bold">Buy, Sell, And Trade On The Go</h3>
                <p className="text-gray-400">
                  Manage Your Holdings From Your Mobile Device.
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
                <h3 className="text-xl font-bold">Take Control Of Your Wealth</h3>
                <p className="text-gray-400">
                  Rest Assured You (And Only You) Have Access To Your Funds.
                </p>
              </div>
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex space-x-4 mt-8">
            <a
              href="#"
              className="btn bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4 py-2 flex items-center"
            >
              <img
                src="google-play.png"
                alt="Google Play"
                className="w-6 h-6 mr-2"
              />
              Get it on Google Play
            </a>
            <a
              href="#"
              className="btn bg-gray-800 hover:bg-gray-700 text-white rounded-lg px-4 py-2 flex items-center"
            >
              <img
                src="app-store.png"
                alt="App Store"
                className="w-6 h-6 mr-2"
              />
              Download on the App Store
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <img
            src="mobile-mockup.png"
            alt="Mobile Mockup"
            className="w-3/4 lg:w-2/3"
          />
          <div className="absolute top-1/3 left-[60%] transform -translate-x-1/2 bg-white rounded-lg p-2">
            <img
              src="qr-code.png"
              alt="QR Code"
              className="w-20 h-20"
            />
            <p className="text-black font-semibold text-center mt-2">Scan To Download</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeYourMoney;
