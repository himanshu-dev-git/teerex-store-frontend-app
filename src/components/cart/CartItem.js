import React from "react";
import { useCartContext } from '../../utils/CartContext';
import ControlButton from "../common/ControlButton";
import './CartItem.css'


export const CartItem = ({ details }) => {
    const {imageURL, name, price, selectedQty, quantity, id, gender, color, type } = details;
    const {setIdsInCart, setTotalItems, setCartItems} = useCartContext();

    const handleDeleteItem = () => {
        setTotalItems(prev => prev - selectedQty);

        setIdsInCart(prev => {
            const newSet = new Set(prev);
            newSet.delete(id);

            return newSet;
        });

        setCartItems(prev => {
            const newMap = new Map(prev);
            newMap.delete(id);

            return newMap;
        });
    }

    
    return (
        <>
            <div className="cart-item">
                <div className="cart-item-img">
                    <img src={imageURL} alt='...' />

                </div>
                <div className="cart-item-details">
                    <div className="detail-row">
                        <h4>{name} ({gender})</h4>
                        <span>&#8377;{price}</span>
                    </div>
                    <div className="detail-row">
                        <ControlButton available={quantity} id={id} />
                        <button className="remove-item" onClick={handleDeleteItem}>Remove Item</button>

                    </div>
                    <div className="additional-details">
                        <ul>
                            <li key={type}>{type}</li>
                            <li key={gender}>{gender}</li>
                            <li key={color}>{color}</li>
                        </ul>
                    </div>
                </div>

            </div>  
        </>
    )
}
