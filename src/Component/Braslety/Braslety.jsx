import c from "./Braslety.module.css"


import Braslety0 from "./CardBraslety/Braslety0";
import React from "react";

const items = [
    {name: "Трехрядный браслет из Яшмы, Агата и Кварца.",  price: 3250, image: "https://ae04.alicdn.com/kf/Sb1fe524f36714943a48ba5e15fa307b3x.jpg_480x480.jpg"},
    {name: "Браслет на руку бижутерия с натуральными камнями", price: 7250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNu7tF7RrvdP4iuH-mkA6i2Ubulj0soQu1y74d-oD4yrQRBsxZ8go2O6EKvhPIiERQwG4&usqp=CAU"},
    {name: "Браслет на руку бижутерия с натуральными камнями", price: 7250, image: "https://angelskaya925.com/image/cache/catalog/11112222-1900x800s.jpg"},
    {name: "Браслет на руку широкий золотой сафари", price: 7250, image: "https://ae04.alicdn.com/kf/He51af649b54341d18881ac2528c75169j.jpg"},
    {name: "Браслет из бисера многослойный", price: 7250, image: "https://basket-12.wbcontent.net/vol1812/part181202/181202546/images/c516x688/1.webp"},
    {name: "Комбинированные браслет на руку: день-ночь", price: 7250, image: "https://st-cdn.tsum.com/sig/c194e565859921c7ad59508cf1181be9/width/434/i/6b/07/0f/55/3ba28d01-2744-40fb-b0ce-27ec8f9a18eb.jpg"},
    {name: "Браслет широкий золотистый в стиле тиффани", price: 7250, image: "https://s.alicdn.com/@sc04/kf/H30499800fdf4464789f80d9ee9af783dj.jpg_720x720q50.jpg"},
    {name: "Браслет широкий многослойный с натуральными камнями бирюзы", price: 7250, image: "https://lavzjewellery.ru/upload/resize_cache/iblock/f33/o0kji4qstgjwt79qrudbf4cmujyvkxry/490_490_0/BR.BR.08.CZ.SS_1.jpg"},
    {name: "Браслет широкий многослойный с натуральными камнями", price: 7250, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJHlUVvt1jBecJdrIGkGG81TAwyB0OTSHnNw84oAsGdGXohlslAEOrk-mJeONPNiWQqw&usqp=CAU"}

]


function Braslety() {
    return (
        <>
            <div className={c.braslety}>
                {items.map((item) => (
                    <React.Fragment key={item}>
                        <Braslety0 name={item.name} price={item.price} image={item.image}/>
                    </React.Fragment>
                ))}
            </div>
        </>
    )

}

export default Braslety;