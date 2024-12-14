import React from "react";

const HowItWorks = () => {
  return (
    <div className="bg-black text-white py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">How It Work</h2>
        <p className="text-gray-400 mt-4">
          Stacks is a production-ready library of stackable content blocks built in React Native.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {/* Step 1 */}
        <div>
          <div className="flex justify-center mb-4">
            <img
              src="cloud-icon.png"
              alt="Download"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-sm text-gray-400 uppercase">Step 1</h3>
          <h2 className="text-xl font-bold mt-2">Download</h2>
          <p className="text-gray-400 mt-2">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
          </p>
        </div>

        {/* Step 2 */}
        <div>
          <div className="flex justify-center mb-4">
            <img
              src="wallet-icon.png"
              alt="Connect Wallet"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-sm text-gray-400 uppercase">Step 2</h3>
          <h2 className="text-xl font-bold mt-2">Connect Wallet</h2>
          <p className="text-gray-400 mt-2">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
          </p>
        </div>

        {/* Step 3 */}
        <div>
          <div className="flex justify-center mb-4">
            <img
              src="mining-icon.png"
              alt="Start Trading"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-sm text-gray-400 uppercase">Step 3</h3>
          <h2 className="text-xl font-bold mt-2">Start Trading</h2>
          <p className="text-gray-400 mt-2">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
          </p>
        </div>

        {/* Step 4 */}
        <div>
          <div className="flex justify-center mb-4">
            <img
              src="money-icon.png"
              alt="Earn Money"
              className="w-20 h-20"
            />
          </div>
          <h3 className="text-sm text-gray-400 uppercase">Step 4</h3>
          <h2 className="text-xl font-bold mt-2">Earn Money</h2>
          <p className="text-gray-400 mt-2">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
