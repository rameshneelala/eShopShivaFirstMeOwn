import Header from '../Header';
import CheckoutProduct from '../CheckoutProduct'
import Subtotal from '../Subtotal';
import './index.css'
import CartContext from '../../CartContext';

const Checkout = () => (
    <CartContext.Consumer>
        {value => {
            const {productList} = value
            // console.log(productList)
        return (
        <div>
            <Header />
            <div className="checkout">
                <div className="checkout_left">
                    <img src= "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="checkout_poster" className="checkout_ad" />
                <div>
                    <h2 className='checkout_title'>Your shopping cart</h2>
                    <ul className='add_items'>
                        {productList.map(each => (
                            <CheckoutProduct key={each.id} details={each} />
                        ))}
                    </ul>
                </div>
                </div>

                <div className="checkout_right">
                    <Subtotal />
                </div>
            </div>
        </div>
        )
    }}
</CartContext.Consumer>
    )

export default Checkout
