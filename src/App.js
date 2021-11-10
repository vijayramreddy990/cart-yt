import React from "react";
import "./App.css";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";

const App = () => {
  const { productItems } = data;
  return (
    <div>
      Hii
      <Header />
    </div>
  );
};

export default App;
