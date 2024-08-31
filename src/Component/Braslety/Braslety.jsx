import c from "./Braslety.module.css"

import Braslety07 from "./CardBraslety/Braslety07";
import Braslety09 from "./CardBraslety/Braslety09";
import Braslety08 from "./CardBraslety/Braslety08";
import Braslety06 from "./CardBraslety/Braslety06";
import React from "react";
import Braslety05 from "./CardBraslety/Braslety05";
import Braslety04 from "./CardBraslety/Braslety04";
import Braslety03 from "./CardBraslety/Braslety03";
import Braslety02 from "./CardBraslety/Braslety02";
import Braslety01 from "./CardBraslety/Braslety01";


function Braslety() {
    return (
        <>
            <div className={c.braslety}>
                <Braslety01 name="Трехрядный браслет из Яшмы, Агата и Кварца." price={3250}/>
                <Braslety02 name="Браслет на руку бижутерия с натуральными камнями" price={7250}/>
                <Braslety03 name="Браслет на руку бижутерия с натуральными камнями" price={7250}/>
                <Braslety04 name="Браслет на руку широкий золотой сафари" price={7250}/>
                <Braslety05 name="Браслет из бисера многослойный" price={7250}/>
                <Braslety06 name="Комбинированные браслет на руку: день-ночь" price={7250}/>
                <Braslety07 name="Браслет широкий золотистый в стиле тиффани" price={7250}/>
                <Braslety08 name="Браслет широкий многослойный с натуральными камнями бирюзы" price={7250}/>
                <Braslety09 name="Браслет широкий многослойный с натуральными камнями" price={7250}/>

            </div>
        </>
    )

}

export default Braslety;