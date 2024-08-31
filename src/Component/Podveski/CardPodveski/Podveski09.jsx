
import {useState} from 'react'

import c from "./style.module.css"

function Podveski09(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://krasavica.info/uploads/posts/2022-12/1672142290_krasavica-info-p-komplekt-ukrashenii-iz-zolota-s-brillianta-63.jpg" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Podveski09;