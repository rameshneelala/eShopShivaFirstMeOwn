import CartContext from '../../CartContext';
import './index.css'
import { FaRegStar } from "react-icons/fa";


const CheckoutProduct = props => {
    const {details} = props 
    const {title, image, price} = details
    // console.log(details)

    return (
        <CartContext.Consumer>
            {value => {
                const {removeCartItem} = value

                const removeItem = () => {
                    removeCartItem(details)
                }

            return (
                     <li className='checkoutProduct'>
                        <img src={image} alt="" className="checkoutProduct_image" />
                    <div className="checkoutProduct_info">
                        <p className="checkoutProduct_title">{title}</p>
                        <FaRegStar className='star' />
                        <p>{price}</p>
            <button type='button' className='remove_button' onClick = {removeItem}>Remove from Basket</button>
        </div>
    </li>
            )
        }}
    </CartContext.Consumer>
)
}

export default CheckoutProduct
