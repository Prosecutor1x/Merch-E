import React from "react";
import { Navbar2 } from "../../components/nav2";
import { Navbar } from "../../components/navbar";
import Products from "./product";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div>
      <Navbar2/>
      <Products />
    </div>
  );
}
