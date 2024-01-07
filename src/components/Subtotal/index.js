import './index.css'
import CurrencyFormat from "react-currency-format"
import CartContext from '../../CartContext'

const Subtotal = () => (
    <CartContext.Consumer>
        {value => {
            const {productList} = value
            let total = 0
            let length = productList.length 
            productList.forEach(each => total += parseInt(each.price))
    return (
  <div className="subtotal">
        <CurrencyFormat 
        renderText = {(value) => (
            <>
            <p>
                Subtotal: ({length} items): <strong>{total}</strong>
            </p>
            <small className="subtotal_gift">
                <input type='checkbox' /> This order contains a gift
            </small>
            </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}

        />
        <button>Proceed to Checkout</button>
  </div>
    )
}}
</CartContext.Consumer>
)

export default Subtotal
