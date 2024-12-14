import React from "react";
import HeroSection from "./HeroSection";

export const Header = () => {
  return (
    <div className="navbar bg-transparent text-white fixed top-0 left-0 w-full z-50">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
        >
          <li>
            <a>Homepage</a>
          </li>
          <li>
            <a>Buy Crypto</a>
          </li>
          <li>
            <a>Markets</a>
          </li>
          <li>
            <a>Sell Crypto</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li>
            <a>BITUSDT</a>
          </li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">CryptoX</a>
    </div>
    <div className="navbar-center lg:flex ml-4">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-700 text-white">
            Homepage
          </a>
        </li>
        <li>
          <a>Buy Crypto</a>
        </li>
        <li>
          <a>Markets</a>
        </li>
        <li>
          <a>Sell Crypto</a>
        </li>
        <li>
          <a>Blog</a>
        </li>
        <li>
          <a>BITUSDT</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
    <a className="btn border border-white bg-transparent text-white rounded-full hover:bg-blue-500 hover:text-black">
        Wallet
      </a>
    </div>
  </div>
  );
};
