import c from "../Kolca/Kolca.module.css";
import Kolco01 from "../Kolca/CardKolca/Kolco01";
import Kolco02 from "../Kolca/CardKolca/Kolco02";
import Kolco03 from "../Kolca/CardKolca/Kolco03";
import Kolco04 from "../Kolca/CardKolca/Kolco04";
import Kolco05 from "../Kolca/CardKolca/Kolco05";
import Kolco06 from "../Kolca/CardKolca/Kolco06";
import Kolco07 from "../Kolca/CardKolca/Kolco07";
import Kolco08 from "../Kolca/CardKolca/Kolco08";
import Kolco09 from "../Kolca/CardKolca/Kolco09";
import Podveski01 from "./CardPodveski/Podveski01";
import Podveski02 from "./CardPodveski/Podveski02";
import Podveski09 from "./CardPodveski/Podveski09";
import Podveski08 from "./CardPodveski/Podveski08";
import Podveski07 from "./CardPodveski/Podveski07";
import Podveski06 from "./CardPodveski/Podveski06";
import Podveski05 from "./CardPodveski/Podveski05";
import Podveski04 from "./CardPodveski/Podveski04";
import Podveski03 from "./CardPodveski/Podveski03";


function Podveski() {
    return (
        <>
            <div className={c.kolca}>
                <Podveski01 name="Обручальные кольца «Вулканическая лава»" price={3250}/>
                <Podveski02 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Podveski03 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Podveski04 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Podveski05 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Podveski06 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Podveski07 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Podveski08 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Podveski09 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>

            </div>
        </>
    )

}

export default Podveski;