import React from "react"
import c from "./Kolca.module.css"


import Kolco0 from "./CardKolca/Kolco0";


const items = [
    {name: "Обручальные кольца «Вулканическая лава»", price: 3250, image: "https://silverbeard.ru/wp-content/uploads/2017/07/DSC04164_kv.jpg"},
    {name: "Комбинированные обручальные кольца: день-ночь", price: 7250, image: "https://silverbeard.ru/wp-content/uploads/2020/12/Obruchalnye-koltsa-Vulkanicheskaya-lava.jpg"},
    {name: "Обручальные кольца «Волна и Гора»", price: 5250, image: "https://whitelake-shop.ru/assets/cache/images/shop/1710/c2c3d6d2df393c0b52b397cacd41bf54_0.53047200_1645348404-1400x-7f9.jpeg"},
    {name: "Комбинированные обручальные кольца: «Счастливые веточки»", price: 4250, image: "https://cs5.livemaster.ru/storage/01/e5/f1d39825d8860759b765fe24a6xe--ukrasheniya-drevesnye-obruchalnye-koltsa.jpg"},
    {name: "Обручальные кольца «Весенние цветы»", price: 3250, image: "https://www.24-karat.ru/upload/iblock/08f/obruchalnye-koltsa-s-otpechatkom-i-meteoritom.JPG"},
    {name: "Обручальные кольца резные", price: 6250, image: "https://cs5.livemaster.ru/storage/92/ca/f06ed1c0ce758506ffe37bb7b9v6--svadebnyj-salon-obruchalnye-koltsa-zolotye-s-brilliantami-3d0.jpg"},
    {name: "Обручальные кольца «Тефия»", price: 8050, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgaSZe_PTyAh5jWVMAyTs4t2zlm-fJNVz1Y7jtO0mvo1TRrkeOestUAQSLhrrUJs0jChE&usqp=CAU"},
    {name: "Обручальные кольца «ЯСТобой»", price: 9250, image: "https://cs1.livemaster.ru/storage/a1/08/16967e34bb4c601aaef21277582i--svadebnyj-salon-slavyanskie-obruchalnye-koltsa-svadebnik-s-tr.jpg"},
    {name: "Обручальные кольца «Луна»", price: 5250, image: "https://cs5.livemaster.ru/storage/d5/ba/b164a6918fe4e910ac1f8e1aaddc--ukrasheniya-obruchalnye-koltsa-luna.jpg"},
];

function Kolca() {
    return (
        <>
           <div className={c.kolca}>
               {items.map((item) => (
                   <React.Fragment key={item}>
                       <Kolco0 name={item.name} price={item.price} image={item.image}/>
                   </React.Fragment>
               ))}

           </div>
        </>
    )
}

export default Kolca;