import c from "./Podvesk.module.css";
import React from "react";
import Podveski0 from "./CardPodveski/Podveski0";



const items = [
    {name: "Бриллиантовое колье «Вулканическая лава»", price: 3250, image: "https://krasavica.info/uploads/posts/2022-03/1646540302_2-krasavica-info-p-brilliantovoe-kole-devushka-krasivo-foto-2.jpg"},
    {name: "Женские ожерелья-чокер с подвеской в виде латов на шею", price: 6690, image: "https://ir.ozone.ru/s3/multimedia-h/c1000/6753353093.jpg"},
    {name: "Биб-ожерелье", price: 5550, image: "https://uvelirnoedelo.ru/wp-content/uploads/2021/09/4-Zolotoye-kolye-s-rubinami-osobennosti-vybora.jpg"},
    {name: "Кулон на цепочке", price: 8250, image: "https://ir.ozone.ru/s3/multimedia-1-3/c400/7109282667.jpg"},
    {name: "Ожерелье-ривьера", price: 3250, image: "https://static2.issaplus.com/wa-data/public/shop/products/65/80/118065/images/226891/226891.600x900.jpg"},
    {name: "Ожерелье-цепочка", price: 9250, image: "https://ir-3.ozone.ru/s3/multimedia-1-1/c500/6908592493.jpg"},
    {name: "Фестон", price: 7250, image: "https://krasavica.info/uploads/posts/2022-03/1646149227_42-krasavica-info-p-podveski-s-brilliantami-devushka-krasivo-f-46.jpg"},
    {name: "Лариат или «лассо»", price: 2250, image: "https://krasavica.info/uploads/posts/2022-12/1672142295_krasavica-info-p-komplekt-ukrashenii-iz-zolota-s-brillianta-4.jpg"},
    {name: "Торсад", price: 4250, image: "https://krasavica.info/uploads/posts/2022-12/1672142290_krasavica-info-p-komplekt-ukrashenii-iz-zolota-s-brillianta-63.jpg"}
]

function Podveski() {
    return (
        <>
            <div className={c.podveski}>
                {items.map((item) => (
                    <React.Fragment key={item}>
                        <Podveski0 name={item.name} price={item.price} image={item.image}/>
                    </React.Fragment>
                ))}
            </div>
        </>
    )

}


export default Podveski;