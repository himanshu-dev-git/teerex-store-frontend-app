import React, {useEffect, useState} from 'react';
import Header from '../../components/common/Header';
import { useCartContext } from '../../utils/CartContext';
import {CartItem} from "../../components/cart/CartItem";
import './Cart.css';

const Cart = () => {

    const { totalItems, cartItems } = useCartContext();
    const [totalBill, setTotalBill] = useState(0);

    useEffect(() => {
        setTotalBill(calcBill(cartItems));
    }, [totalItems, cartItems, setTotalBill]);

    //for calculating total bill
    const calcBill = (items) => {
        let total = 0;

        for(const value of items.values()) {
            let qty = value.selectedQty;
            let price = value.price;

            total += (qty*price);
        }

        return total;
    }

    return (
        <>
            <Header />

            <div className='bill-n-items'>
                <div className='cart-items'>
                    {cartItems.size ? ((Array.from(cartItems, ([key, value]) => value)).map(item => <CartItem key= {item.id} details={item} />)) : (
                        <div className='empty-cart'>
                            <p>Your cart is empty</p>
                        </div>
                    )}
                </div>

                <div className='bill'>
                        <h1>Invoice</h1>
                        <div className='bill-row'>
                            <span>Total Items:</span>
                            <span><strong>{totalItems}</strong></span>
                        </div>
                        <div className='bill-row'>
                            <span>Amount:</span>
                            <span><strong>&#8377;{totalBill}</strong></span>
                        </div>
                </div>

            </div>
        </>
    );
}

export default Cart;
