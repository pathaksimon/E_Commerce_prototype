import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
        cartList,
      } = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onRemoveCartItem = () => {
        removeCartItem()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="next">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={onRemoveCartItem}
                  >
                    Remove
                  </button>
                </div>
                <CartListView />
                {/* TODO: Add your code for Cart Summary here */}
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
