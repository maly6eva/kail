import c from "./Serejki.module.css";

import Serejki09 from "./CardSerejki/Serejki09";
import Serejki08 from "./CardSerejki/Serejki08";
import Serejki07 from "./CardSerejki/Serejki07";
import Serejki06 from "./CardSerejki/Serejki06";
import Serejki05 from "./CardSerejki/Serejki05";
import Serejki04 from "./CardSerejki/Serejki04";
import Serejki03 from "./CardSerejki/Serejki03";
import Serejki02 from "./CardSerejki/Serejki02";
import Serejki01 from "./CardSerejki/Serejki01";


function Serejki() {
    return (
        <>
            <div className={c.serejki}>
                <Serejki01 name="Обручальные кольца «Вулканическая лава»" price={3250}/>
                <Serejki02 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Serejki03 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Serejki04 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Serejki05 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Serejki06 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Serejki07 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Serejki08 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Serejki09 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
            </div>
        </>
    )
}

export default Serejki;