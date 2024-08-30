import с from './Kolco01.module.css'
import {useState} from 'react'


function Kolco01(props) {
    const [kolca, setKolca] = useState(0)

    function handleClick(props) {
        setKolca(kolca + 1)
    }

    return (
        <>
            <div>
                <img className={c.imge} src="https://silverbeard.ru/wp-content/uploads/2020/12/Obruchalnye-koltsa-Vulkanicheskaya-lava.jpg" alt={'Photo'}/>
                <h1 className={c.naz}>{props.name}</h1>
                <h2 className={c.price}>цена:{props.price}p.</h2>
                <button className={c.butt} onClick={handleClick}>Купить{kolca}</button>
            </div>
        </>
    )
}

export default Kolco01;