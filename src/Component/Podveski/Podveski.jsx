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
                <Podveski01 name="Бриллиантовое колье «Вулканическая лава»" price={3250}/>
                <Podveski02 name="Женские ожерелья-чокер с подвеской в виде латов на шею" price={6690}/>
                <Podveski03 name="Биб-ожерелье" price={5550}/>
                <Podveski04 name="Кулон на цепочке" price={8250}/>
                <Podveski05 name="Ожерелье-ривьера" price={3250}/>
                <Podveski06 name="Ожерелье-цепочка" price={9250}/>
                <Podveski07 name="Фестон" price={7250}/>
                <Podveski08 name="Лариат или «лассо»" price={2250}/>
                <Podveski09 name="Торсад" price={4250}/>

            </div>
        </>
    )

}

export default Podveski;