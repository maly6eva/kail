
import c from "./Bijuterik.module.css"
import Kolco01 from "../Kolca/CardKolca/Kolco01";


function MyCard(props) {
    return (
        <>
            <div className={c.cont}>
                <Kolco01 name="Обручальные кольца «Вулканическая лава»" price={250}/>

            </div>


        </>
    )
}

export default MyCard;