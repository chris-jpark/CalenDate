import React, { Component } from "react";
import './App.css';
// import Navbar from './components/Navbar'
import {BrowserRouter as Router} from 'react-router-dom';
// import { NavbarLogo } from './components/Navbar/NavbarElements';
import Home from './pages'


function App() {
    return (
        <Router>
         <Home />
        </Router>
    );
}


export default App;
