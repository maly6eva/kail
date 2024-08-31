
import {useState} from 'react'

import c from "./style.module.css"

function Podveski03(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://uvelirnoedelo.ru/wp-content/uploads/2021/09/4-Zolotoye-kolye-s-rubinami-osobennosti-vybora.jpg" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Podveski03;