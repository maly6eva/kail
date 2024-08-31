import logo from './logo.svg';
import './App.css';
import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import Onas from "./Component/Onas/Onas";
import Kolca from "./Component/Kolca/Kolca";
import Serejki from "./Component/Serejki/Serejki";
import Braslety from "./Component/Braslety/Braslety";
import Podveski from "./Component/Podveski/Podveski";
import Home from "./Component/Home/Home";
import c from "./Component/Navbar/Navbar.module.css"
import {Route, Router, Routes} from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Nashistati from "./Component/Nashistati/Nashistati";
import Obijuterii from "./Component/Obijuterii/Obijuterii";
import MyCard from "./Component/MyCard/MyCard";


function App(props) {



    return (
    <>
     <Navbar/>
        <div className={c.container}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/onas" element={<Onas/>}/>
                <Route path="/kolca" element={<Kolca/>}/>
                <Route path="/serejki" element={<Serejki/>}/>
                <Route path="/braslety" element={<Braslety/>}/>
                <Route path="/podveski" element={<Podveski/>}/>
                <Route path="/nashistati" element={<Nashistati/>}/>
                <Route path="/obijuterii" element={<Obijuterii/>}/>
            </Routes>
        </div>
        <MyCard/>
        <Footer/>
    </>
  );
}

export default App;
