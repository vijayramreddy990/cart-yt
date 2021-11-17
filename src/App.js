import React from "react";
import "./App.css";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import VariousRoutes from "./components/front/Routes/Routes";

const App = () => {
  const { productItems } = data;
  return (
    <div>
      <Router>
        <Header />
        <VariousRoutes productItems={productItems} />
      </Router>
    </div>
  );
};

export default App;
