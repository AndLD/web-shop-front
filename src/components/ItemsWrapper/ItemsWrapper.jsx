import React, {useEffect, useState, useRef} from 'react'
import {ItemCard} from "../ItemCard/ItemCard"
import './itemsWrapper.scss'

export const ItemsWrapper = (props) => {
    let itemData, 
        typeRender = props.typeRender || "all"
    const [data, updateData] = useState(0);

    async function getAllItems () {
        try {
            const response = await fetch('http://localhost:8080/products', {
                method: 'GET'
            });
            return await response.json();
        } catch (error) {}
    }

     useEffect(() => {
        (async function () {
            if(typeRender = "all-items") itemData = await getAllItems() || []
            let masCards = itemData.map((data) => 
                <ItemCard key={data._id} itemID={data._id} imgBlob={data.images} title={data.title} price={data.price}/>
            )
            updateData(masCards) 
         }());
     }, [])

    return(
        <div className="item_wr b-white">
            {data}
        </div>
    )
}