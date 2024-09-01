import c from "./Serejki.module.css";
import Serejki0 from "./CardSerejki/Serejki0";
import React from "react";
import Braslety0 from "../Braslety/CardBraslety/Braslety0";

const items = [
    {name: "Длинные вечерние серьги Бижутерия из бисера", price: 3250, image: "https://basket-02.wbbasket.ru/vol239/part23966/23966344/images/big/1.jpg"},
    {name: "Золотые серьги с жемчугом", price: 7950, image: "https://basket-02.wbbasket.ru/vol167/part16793/16793310/images/big/1.webp"},
    {name: "Серьги с жемчугом «Бантики»", price: 7250, image: "https://image-thumbs.shafastatic.net/1627240340_310_430"},
    {name: "Висячие серьги Gulkina", price: 7250, image: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/g/13/f3a661b4-f5e7-4876-85c3-d01ea9eaed61.jpg"},
    {name: "Роскошные Жемчужные длинные висячие серьги SYOUJ", price: 7950, image: "https://ae04.alicdn.com/kf/S5eefe79eab5545cdbd89fe4104c2be10z.jpg" },
    {name: "PATTAYA Женские, позолоченные золотом 585 пробы серьги с круглой подвеской с цирконом", price: 8850, image: "https://img.klubok.com/img/used/2021/06/01/29981/29981504_2.jpg"},
    {name: "PATAYA изящные женские серьги с подвесками в виде резных шаров цвета золота 585 пробы", price: 7250, image: "https://image-thumbs.shafastatic.net/999310359_310_430"},
    {name: "Комбинированные обручальные кольца: день-ночь", price: 7250, image: "https://images.prom.ua/3596684375_w200_h200_krasivye-vechernie-sergi.jpg"},
    {name: "Комбинированные обручальные кольца: день-ночь", price: 7250, image: "https://goldlode.ru/155654-large_default/sergi-s-zhemchugom-i-kristall.jpg"}
]


function Serejki() {
    return (
        <>
            <div className={c.serejki}>
                {items.map((item) => (
                    <React.Fragment key={item}>
                        <Serejki0 name={item.name} price={item.price} image={item.image}/>
                    </React.Fragment>
                ))}
            </div>
        </>
    )
}

export default Serejki;