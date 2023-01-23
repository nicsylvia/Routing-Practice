import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route, useRoutes } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";

function App() {
  return (
    <div>

      <Header />
      
      <AllRoutes />
    </div>
  );
}

export default App;
