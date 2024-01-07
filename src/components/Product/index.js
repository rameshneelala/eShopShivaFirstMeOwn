import React from 'react'
import './index.css'
import { FaRegStar } from "react-icons/fa";
import CartContext from '../../CartContext';

const Product = props => {
    const {productDetails} = props
   const {id, title, image, price} = productDetails

    return (
        <CartContext.Consumer>
            {value => {
                const {addCartItem} = value

                const addItem = () => {
                    // console.log(productDetails)
                    addCartItem(productDetails)
                }
        return(
            <li className="product" key={id}>
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">{price}</p>
                    <FaRegStar />
                    <img src={image} alt="product_image" className='product_image'  />
                    <div className='add'>
                    <button type='button' className='add_button' onClick={addItem}>Add to Basket</button>
                     </div>
                </div>
            </li>
        )
            }}
        </CartContext.Consumer>
    )
}

export default Product
