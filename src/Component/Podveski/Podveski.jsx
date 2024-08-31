import c from "./Podvesk.module.css";

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
            <div className={c.podveski}>
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