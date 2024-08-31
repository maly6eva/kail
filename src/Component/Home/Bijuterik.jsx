
import c from "./Bijuterik.module.css"


function Bijuterik(props) {
    return (
        <>
            <div className={c.cont}>
                <div className={c.con}>
                    <h1 className={c.bij}>Мы одни из лучших магазинов по всему миру!</h1>
                    <div className={c.coord}>
                        <p className={c.adrez}> адрес: г.Минск ул.Пономаренко 58/61</p>
                        <a className={c.tell} href="tel:375292177690">+375 29 217 76 90</a>
                    </div>
                </div>


                <img src="https://otvet.imgsmail.ru/download/aa3e49651ea6fb4cf63b600a221ad1d4_h-44219.jpg" alt=""/>
                <img src="https://cdn.pixabay.com/photo/2014/02/07/11/31/flowers-260894_1280.jpg" alt=""/>
            </div>


        </>
    )
}

export default Bijuterik;