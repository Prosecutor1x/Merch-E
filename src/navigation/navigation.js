import { render } from '@testing-library/react';
import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Home } from '../pages/Home/home';
import {Login} from '../pages/signup/Login';
import { Signin } from '../pages/signup/signin';
 export function Navigation() {
   
        render (
            <BrowserRouter>
                <Routes>
                <Route path="/" element={<Home/>} />
                    <Route path="/Login" element={<Login/>} />
                    <Route path="/Signin" element={<Signin/>} />
                </Routes>
                </BrowserRouter>,
                document.getElementById("root")
        );
    }

   