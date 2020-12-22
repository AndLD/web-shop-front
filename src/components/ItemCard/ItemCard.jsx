import React from 'react'
// import $ from 'jquery'
import './itemCard.scss'

export const ItemCard = ({
    itemId, 
    imgSrc,
    title,
    price
}) => {

    return(
        <div className="card-item" itemId={itemId}>

            <div className="photo-item-wr d-flex justify-content-center" onClick="">
                <img className="photo-item" src={`/img/goods/${imgSrc}.png`} alt=""/>
            </div>

            <div className="text-item-wr d-flex justify-content-center">
                <span className="text-item" onClick="">
                    {title}
                </span> 
            </div>

            <div className="price-wr d-flex align-items-center">
                <span className="price">{price} грн.</span>
                <button className="btn-buy" onClick=""> 
                    <img src="/img/icons/shopping-cart.svg" alt=""/> 
                </button>
            </div>

        </div>
    )
}