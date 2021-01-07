import React from 'react'
// import $ from 'jquery'
import './itemCard.scss'

export const ItemCard = ({
    itemID, 
    imgBlob,
    title,
    price
}) => {
    return(
        <div className="card-item" itemID={itemID}>

            <div className="photo-item-wr d-flex justify-content-center">
                <img className="photo-item" src={imgBlob} alt={title}/>
            </div>

            <div className="text-item-wr d-flex justify-content-center">
                <span className="text-item">
                    {title}
                </span> 
            </div>

            <div className="price-wr d-flex align-items-center">
                <span className="price">{price} грн.</span>
                <button className="btn-buy"> 
                    <img src="/img/icons/shopping-cart.svg" alt=""/> 
                </button>
            </div>

        </div>
    )
}