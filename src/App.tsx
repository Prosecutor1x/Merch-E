import { render } from "@testing-library/react";
import { Home } from "./pages/Home/home";
import { Login } from "./pages/signup/Login";


import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Signin } from "./pages/signup/signin";



function App() {
  return (
      <Router>
          <Routes>
          <Route path="/" element={<Home/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/Signin" element={<Signin/>} />
          </Routes>
      </Router>
        
  );
}

export default App;
