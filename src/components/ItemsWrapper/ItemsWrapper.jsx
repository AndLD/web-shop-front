import React, {useEffect} from 'react'
import {ItemCard} from "../ItemCard/ItemCard"
import './itemsWrapper.scss'

export const ItemsWrapper = (props) => {
    let itemData = [], typeRender = props.typeRender || "all"
    async function getAllItems () {
        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'GET'
            });
            return await response.json();
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    useEffect(async () => {
      if(typeRender = "all-items") itemData.push(await getAllItems())     
      console.log(itemCard) 
    })

    return(
        <div className="item_wr d-flex justify-content-between b-white">
            {/* <ItemCard itemID={1} imgSrc={1} title={"Видеокарта Gigabyte GeForce GTX 1660 SUPER OC 6144MB (GV-N166SO)"} price={"10 400"}/>
            <ItemCard itemID={2} imgSrc={2} title={"Видеокарта Asus GeForce RTX 2070 Turbo 8192MB (TURBO-RTX2070-8G"} price={"10 400"}/>
            <ItemCard itemID={3} imgSrc={3} title={"Видеокарта MSI GeForce GTX 1660 SUPER VENTUS XS OC 6144MB (GTX  "} price={"10 400"}/>
            <ItemCard itemID={4} imgSrc={1} title={"Видеокарта Gigabyte GeForce GTX 1650 D6 WindForce OC 4096MB (GV"} price={"10 400"}/>
            <ItemCard itemID={5} imgSrc={2} title={"Видеокарта Palit GeForce GTX 1660 SUPER StormX 6144MB (NE6166S0"} price={"10 400"}/> */}
        </div>
    )
}