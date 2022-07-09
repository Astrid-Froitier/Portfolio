import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import OnePage from "./components/OnePage";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<OnePage />} />
      </Routes>
    </div>
  );
}

export default App;
