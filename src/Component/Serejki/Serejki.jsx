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
                <Serejki01 name="Длинные вечерние серьги Бижутерия из бисера" price={3250}/>
                <Serejki02 name="Золотые серьги с жемчугом" price={7950}/>
                <Serejki03 name="Серьги с жемчугом «Бантики» " price={7250}/>
                <Serejki04 name="Висячие серьги Gulkina" price={7250}/>
                <Serejki05 name="Роскошные Жемчужные длинные висячие серьги SYOUJ" price={7950}/>
                <Serejki06 name="PATTAYA Женские, позолоченные золотом 585 пробы серьги с круглой подвеской с цирконом" price={8850}/>
                <Serejki07 name="PATAYA изящные женские серьги с подвесками в виде резных шаров цвета золота 585 пробы" price={7250}/>
                <Serejki08 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
                <Serejki09 name="Комбинированные обручальные кольца: день-ночь" price={7250}/>
            </div>
        </>
    )
}

export default Serejki;