import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Logo and Contact Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="logo.png"
                alt="Cryptex Logo"
                className="h-10 w-10"
              />
              <h1 className="text-2xl font-bold">Cryptex</h1>
            </div>
            <p className="mb-4">Let's talk! <span role="img" aria-label="thumbs up">👍</span></p>
            <ul className="space-y-2 text-gray-400">
              <li>+12 345 678 9101</li>
              <li>hello.cryptex@gmail.com</li>
              <li>Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522</li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="font-bold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Spot</li>
              <li>Inverse Perpetual</li>
              <li>USDT Perpetual</li>
              <li>Exchange</li>
              <li>Launchpad</li>
              <li>Binance Pay</li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Buy Crypto</li>
              <li>Markets</li>
              <li>Trading Fee</li>
              <li>Affiliate Program</li>
              <li>Referral Program</li>
              <li>API</li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Bybit Learn</li>
              <li>Help Center</li>
              <li>User Feedback</li>
              <li>Submit a request</li>
              <li>API Documentation</li>
              <li>Trading Rules</li>
            </ul>
          </div>

          {/* Column 5: About Us */}
          <div>
            <h3 className="font-bold mb-4">About Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Bybit</li>
              <li>Authenticity Check</li>
              <li>Careers</li>
              <li>Business Contacts</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-gray-400 text-sm">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p>© 2022 Cryptex All Rights Reserved by <span className="text-blue-500">codewithsadee</span></p>
            <div className="flex space-x-4 mt-4 lg:mt-0">
              <a href="#"><i className="fab fa-facebook text-gray-400 hover:text-white"></i></a>
              <a href="#"><i className="fab fa-twitter text-gray-400 hover:text-white"></i></a>
              <a href="#"><i className="fab fa-instagram text-gray-400 hover:text-white"></i></a>
              <a href="#"><i className="fab fa-linkedin text-gray-400 hover:text-white"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
