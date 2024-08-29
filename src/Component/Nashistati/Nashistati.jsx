
import c from "./Nashistati.module.css"

function Nashistati() {
    return (
        <>
            <div>
                <h1 className={c.kont}>Наши контакты</h1>
                <div>
                    <div className={c.con}>
                        <p className={c.adrez}> адрес: г.Минск ул.Пономаренко 58/61</p>
                    </div>
                    <div>`
                        <a className={c.tell} href="tel:375292177690">+375 29 217 76 90</a>
                    </div>
                    <div>
                        <a className={c.tell} href="tel:9775776187">+7 977 577 61 87</a>
                    </div>
                    <div>
                        <a className={c.mail} href="mailto:maly6eva.ksenia@gmail.com">maly6eva.ksenia@gmail.com</a>
                    </div>
                    <div className={c.vrema}>
                        <p>Время работы: Пн.-Пт. 10:00 - 21:00
                        </p>
                        <p> Cб. 10:00 - 16:00 Воскр. - выходной</p>
                    </div>
                    <div className={c.img}>
                        <img src="https://chinatoday.ru/wp-content/uploads/2015/11/g-01.png" alt=""/>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Nashistati;