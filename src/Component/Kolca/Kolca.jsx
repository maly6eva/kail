import c from "./Kolca.module.css"

import Kolco01 from "./CardKolca/Kolco01";
import Kolco02 from "./CardKolca/Kolco02";
import Kolco03 from "./CardKolca/Kolco03";
import Kolco04 from "./CardKolca/Kolco04";
import Kolco05 from "./CardKolca/Kolco05";
import Kolco06 from "./CardKolca/Kolco06";
import Kolco07 from "./CardKolca/Kolco07";
import Kolco08 from "./CardKolca/Kolco08";
import Kolco09 from "./CardKolca/Kolco09";

function Kolca() {

    return (
        <>
           <div className={c.kolca}>
               <Kolco01 name="Обручальные кольца «Вулканическая лава»" price={3250}/>
               <Kolco02 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
               <Kolco03 name="Обручальные кольца «Волна и Гора»" price={5250}/>
               <Kolco04 name="Комбинированные обручальные кольца: «Счастливые веточки»" price={4250}/>
               <Kolco05 name="Обручальные кольца «Весенние цветы»" price={3250}/>
               <Kolco06 name="Обручальные кольца резные" price={6250}/>
               <Kolco07 name="Обручальные кольца «Тефия»" price={8050}/>
               <Kolco08 name="Обручальные кольца «ЯСТобой»" price={9250}/>
               <Kolco09 name="Обручальные кольца «Луна»" price={5250}/>

           </div>
        </>
    )
}

export default Kolca;