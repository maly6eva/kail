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
                <Braslety01 name="Обручальные кольца «Вулканическая лава»" price={3250}/>
                <Braslety02 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Braslety03 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Braslety04 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Braslety05 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Braslety06 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Braslety07 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Braslety08 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Braslety09 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>

            </div>
        </>
    )

}

export default Braslety;