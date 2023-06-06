import CartItem from '../CartItem'
import CartContext from '../../context/CartContext'
import './index.css'

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, deleteCartItem, price1} = value
      const price123 = () => {
        let total = 0
        const final = cartList.forEach(element => {
          total += element.price * element.quantity
        })
        return total
      }

      const visible = () => {
        if (cartList.length >= 1) {
          return (
            <>
              <div className="bottom-card">
                <h1>Order Total {price123()}/-</h1>
                <p>{cartList.length} Items in cart</p>
                <button type="button">Checkout</button>
              </div>
            </>
          )
        }
        return <h1>Not Found</h1>
      }
      return (
        <>
          <ul className="cart-list">
            {cartList.map(eachCartItem => (
              <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
            ))}
          </ul>
          {visible()}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
