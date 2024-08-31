
import {useState} from 'react'

import c from "./style.module.css"

function Kolco04(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://static.alltime.ru/obj/article/image-blog/Serebryanoye_obruchalnoye_koltso/Serebryanoye_obruchalnoye_koltso_1.jpg" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Kolco04;