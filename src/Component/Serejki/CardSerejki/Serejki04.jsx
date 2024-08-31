
import {useState} from 'react'

import c from "./style.module.css"

function Serejki04(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/13/f3a661b4-f5e7-4876-85c3-d01ea9eaed61.jpg" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Serejki04;