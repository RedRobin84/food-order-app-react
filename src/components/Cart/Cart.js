import CartItem from "./CartItem/CartItem"
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const DUMMY_CART_MEALS = [
    {
        id: "m1",
        name: "Sushi",
        price: 22.99,
        amount: 3
    },
    {
        id: "m2",
        name: "Schnitzel",
        price: 16.50,
        amount: 1
    }
];

const Cart = props => {
    const cartItems = DUMMY_CART_MEALS.map(item => <CartItem key={item.id} {...item} />);
    const totalPrice = DUMMY_CART_MEALS.reduce((previous, current) => (previous.amount * previous.price) + (current.amount * current.price));

    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalPrice}</span>
            </div>
            <div className={classes.actions}>
                <button type="submit" className={classes['button--alt']}>Close</button>
                <button type="button" className={classes.button}>Order</button>
            </div>
        </Modal>
    );
}

export default Cart;