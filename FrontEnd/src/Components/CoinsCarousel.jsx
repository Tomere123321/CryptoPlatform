import React from "react";

const CoinsCarousel = () => {
  return (
    <div className="bg-black min-h-screen text-white p-8">
      {/* Navigation */}
      <div className="tabs tabs-boxed bg-transparent mb-8">
        <a className="tab tab-active">Crypto</a>
        <a className="tab">DeFi</a>
        <a className="tab">BSC</a>
        <a className="tab">NFT</a>
        <a className="tab">Metaverse</a>
        <a className="tab">Polkadot</a>
        <a className="tab">Solana</a>
        <a className="tab">Opensea</a>
        <a className="tab">Makersplace</a>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Bitcoin Card */}
        <div className="card bg-neutral text-neutral-content shadow-xl">
          <div className="card-body">
            <div className="flex items-center">
              <img
                src="bitcoin-logo.png"
                alt="Bitcoin"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">Bitcoin</h3>
                <span className="text-sm text-gray-400">BTC/USD</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">USD 46,168.95</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-400">36,641.20</span>
              <span className="badge badge-error">-0.79%</span>
            </div>
          </div>
        </div>

        {/* Ethereum Card */}
        <div className="card bg-neutral text-neutral-content shadow-xl">
          <div className="card-body">
            <div className="flex items-center">
              <img
                src="ethereum-logo.png"
                alt="Ethereum"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">Ethereum</h3>
                <span className="text-sm text-gray-400">ETH/USD</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">USD 3,480.04</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-400">36,641.20</span>
              <span className="badge badge-success">+10.55%</span>
            </div>
          </div>
        </div>

        {/* Tether Card */}
        <div className="card bg-neutral text-neutral-content shadow-xl">
          <div className="card-body">
            <div className="flex items-center">
              <img
                src="tether-logo.png"
                alt="Tether"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">Tether</h3>
                <span className="text-sm text-gray-400">USDT/USD</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">USD 1.00</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-400">36,641.20</span>
              <span className="badge badge-error">-0.01%</span>
            </div>
          </div>
        </div>

        {/* BNB Card */}
        <div className="card bg-neutral text-neutral-content shadow-xl">
          <div className="card-body">
            <div className="flex items-center">
              <img
                src="bnb-logo.png"
                alt="BNB"
                className="w-10 h-10 mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">BNB</h3>
                <span className="text-sm text-gray-400">BNB/USD</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">USD 443.56</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-gray-400">36,641.20</span>
              <span className="badge badge-error">-1.24%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsCarousel
