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


function App() {
    let component
    switch (window.location.pathname)  {
        case "/":
            component = <Home/>
            break
        case "/onas":
            component = <Onas/>
            break
        case "/kolca":
            component = <Kolca/>
            break
        case "/serejki":
            component = <Serejki/>
            break
        case "/braslety":
            component = <Braslety/>
            break
        case "/podveski":
            component = <Podveski/>
            break
    }
  return (
    <>
     <Navbar/>
        <div className={c.container}>
            {component}
        </div>
    </>
  );
}

export default App;
