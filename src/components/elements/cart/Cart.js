import { useCart, useCartDispatch } from "@/context/CartContext";
import styles from "./index.module.css"
import Image from "next/image";

const Cart = () => {
    const carts = useCart()
    const dispatch = useCartDispatch()

    const handleAddToCart = product => {
        dispatch({
            type: 'add',
            payload: product
        })
    }

    const handleDecreaseCart = product => {
        dispatch({
            type: 'decrease',
            payload: product
        })
    }

    const handleCheckout = (() => {
        console.log('hai');
    })

    return (
        <div className={styles.cart}>
            <h3>Cart</h3>
            <div className={styles['cacrt__cart-list']}>
                {carts.map((cart, index) => {
                    return (
                        <div key={index} className={styles['cart-item']}>
                            <div className={styles['cart-item__image']}>
                                <Image
                                    src={cart.img_product}
                                    alt={cart.name}
                                    fill
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className={styles['cart-item__desc']}>
                                <p>{cart.name}</p>
                                <p>{cart.price}</p>
                            </div>
                            <div className={styles['cart-item__action']}>
                                <button onClick={() => handleDecreaseCart(cart)}>-</button>
                                <p>{cart.quantity}</p>
                                <button onClick={() => handleAddToCart(cart)}>+</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.carts__checkout}>
                <div className={styles['carts__total-price']}>
                    <p>Total Harga</p>
                    <p>Total Harga</p>
                </div>
                {/* <form onSubmit={() => handleCheckout()}> */}
                    <div className={styles.carts__input_paid}>
                        <label>Paid Amount</label> 
                        <input type="text" placeholder="-" />
                    </div>
                    <div>
                        <button type="submit">Checkout</button>
                    </div>
                {/* </form> */}
            </div>
        </div>
    );
}

export default Cart;