
import {useState} from 'react'

import c from "./style.module.css"

function Braslety07(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://basket-15.wbcontent.net/vol2347/part234783/234783148/images/c516x688/1.webp" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Braslety07;