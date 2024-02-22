import React from "react";
import "./App.css";
import Navbar from "./componets/Nabar";
import SiteBar from "./componets/Sitebar";
import Header from "./componets/Header";
import Cards from "./componets/Cards";
import Choose from "./componets/Choose";
import Cart from "./componets/Cart"


export default function App() {
  return (
    <div>
      <Navbar />
      <SiteBar />
      <Header />
      <Cards />
      <Choose />
      <Cart/>
    </div>
  );
}

