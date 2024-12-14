import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import { Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
