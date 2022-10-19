import React from "react";
import { Navbar } from "../../components/navbar";
import Products from "./product";

export function Home() {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
}
