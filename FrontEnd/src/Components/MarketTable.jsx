import React from "react";

const MarketTable = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Market Update</h1>
        <a href="#" className="text-blue-400 hover:underline">
          See All Coins
        </a>
      </div>

      <div className="tabs tabs-boxed mb-6">
        <a className="tab tab-active">View All</a>
        <a className="tab">Metaverse</a>
        <a className="tab">Entertainment</a>
        <a className="tab">Energy</a>
        <a className="tab">NFT</a>
        <a className="tab">Gaming</a>
        <a className="tab">Music</a>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full text-left text-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Last Price</th>
              <th>24h %</th>
              <th>Market Cap</th>
              <th>Last 7 Days</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Bitcoin Row */}
            <tr>
              <td>1</td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src="bitcoin-logo.png"
                    alt="Bitcoin"
                    className="w-6 h-6"
                  />
                  <span className="font-bold">Bitcoin</span>
                  <span className="text-gray-400">BTC</span>
                </div>
              </td>
              <td>$56,623.54</td>
              <td className="text-green-400 font-bold">+1.45%</td>
              <td>$880,423,640,582</td>
              <td>
                <div className="h-6 w-16 bg-green-500 rounded-lg"></div>
              </td>
              <td>
                <button className="btn btn-outline btn-sm text-white border-white">
                  Trade
                </button>
              </td>
            </tr>

            {/* Ethereum Row */}
            <tr>
              <td>2</td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src="ethereum-logo.png"
                    alt="Ethereum"
                    className="w-6 h-6"
                  />
                  <span className="font-bold">Ethereum</span>
                  <span className="text-gray-400">ETH</span>
                </div>
              </td>
              <td>$56,623.54</td>
              <td className="text-red-400 font-bold">-5.12%</td>
              <td>$880,423,640,582</td>
              <td>
                <div className="h-6 w-16 bg-red-500 rounded-lg"></div>
              </td>
              <td>
                <button className="btn btn-outline btn-sm text-white border-white">
                  Trade
                </button>
              </td>
            </tr>

            {/* Tether Row */}
            <tr>
              <td>3</td>
              <td>
                <div className="flex items-center space-x-2">
                  <img
                    src="tether-logo.png"
                    alt="Tether"
                    className="w-6 h-6"
                  />
                  <span className="font-bold">Tether</span>
                  <span className="text-gray-400">USDT/USD</span>
                </div>
              </td>
              <td>$56,623.54</td>
              <td className="text-green-400 font-bold">+1.45%</td>
              <td>$880,423,640,582</td>
              <td>
                <div className="h-6 w-16 bg-green-500 rounded-lg"></div>
              </td>
              <td>
                <button className="btn btn-outline btn-sm text-white border-white">
                  Trade
                </button>
              </td>
            </tr>

            {/* BNB Row */}
            <tr>
              <td>4</td>
              <td>
                <div className="flex items-center space-x-2">
                  <img src="bnb-logo.png" alt="BNB" className="w-6 h-6" />
                  <span className="font-bold">BNB</span>
                  <span className="text-gray-400">BNB/USD</span>
                </div>
              </td>
              <td>$56,623.54</td>
              <td className="text-red-400 font-bold">-3.75%</td>
              <td>$880,423,640,582</td>
              <td>
                <div className="h-6 w-16 bg-red-500 rounded-lg"></div>
              </td>
              <td>
                <button className="btn btn-outline btn-sm text-white border-white">
                  Trade
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketTable;
