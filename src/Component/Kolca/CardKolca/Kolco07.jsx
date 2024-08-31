
import {useState} from 'react'

import c from "./style.module.css"

function Kolco07(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuR1k65fV07THnGnR7Ra4O2CUFeq3D6rfHJuWY9QzbC2fzF8y0zUy8coFKSyN0B3ssVrY&usqp=CAU" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Kolco07;