import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./components/app/HomePage";
import Menu from "./components/app/Menu";

const App = () => {
  return (
      <BrowserRouter>
      <Routes>
          <Route index element={<HomePage />} />
          <Route exact path="/menu" element={<Menu />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App