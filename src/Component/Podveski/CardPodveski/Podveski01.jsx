
import {useState} from 'react'

import c from "./style.module.css"

function Podveski01(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://krasavica.info/uploads/posts/2022-03/1646540302_2-krasavica-info-p-brilliantovoe-kole-devushka-krasivo-foto-2.jpg" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Podveski01;