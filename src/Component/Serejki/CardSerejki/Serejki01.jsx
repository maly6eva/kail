
import {useState} from 'react'

import c from "./style.module.css"

function Serejki01(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://anabel27.ru/wp-content/uploads/2024/02/00939-%D1%81%D0%B5%D1%80%D1%8C%D0%B3%D0%B8-%D0%B8%D0%B7-%D0%B1%D0%B8%D1%81%D0%B5%D1%80%D0%B0-4.jpg" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Serejki01;