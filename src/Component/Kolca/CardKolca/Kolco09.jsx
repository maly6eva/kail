
import {useState} from 'react'

import c from "./style.module.css"

function Kolco09(props) {
    const [kolca, setKolca] = useState(null)

    function handleClick(props) {
        setKolca(kolca)
    }

    return (
        <>
            <div className={c.content}>
                <img className={c.imge} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBQsIhuw-BIQ5NrVqaifrLIOyKrJLY1LMkwrpDtHK9Ln4Md5quze0MTMxofZCiK0R_T7o&usqp=CAU" alt={'Photo'}/>
                <h2 className={c.naz}>{props.name}</h2>
                <h2 className={c.price}>{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Kolco09;