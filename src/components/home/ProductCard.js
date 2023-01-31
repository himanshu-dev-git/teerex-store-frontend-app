import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Box
} from "@mui/material";
import { useCartContext } from "../../utils/CartContext";
import ControlButton from "../common/ControlButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import './ProductCard.css';

const ProductCard = ({product}) => {

    const { idsInCart, setIdsInCart, setTotalItems, setCartItems } = useCartContext();

    const handleAddToCart = (id) => {
        setIdsInCart(prev => {
            const newSet = new Set(prev);

            newSet.add(id);
            return newSet;
        });

        addItem(id);
        setTotalItems(prev => prev+1);
    }

    const addItem = (id) => {
        const item = {
            ...product,
            selectedQty: 1
        }

        setCartItems(prev => {
            const newItems = new Map(prev);
            newItems.set(id, item);
            return newItems;
        });

    }

    return (
        <div className="product-card">
            {product.quantity <=0 ? (
                <div className="sold-out-banner">
                    <span className="sold-out">Sold Out!</span>

                </div>
            ): null}
            <div className="card-image">
                <img src={product.imageURL} alt="..."/>

            </div>
            <div className="card-details">
                <div className="name-n-price">
                    <h4>{product.name}</h4>
                    <p className="price"> &#8377;{product.price}</p>
                </div>
                {idsInCart.has(product.id) ? <ControlButton available={product.quantity} id={product.id}/> : (
                    <button className="add-to-cart-btn" onClick={() => handleAddToCart(product.id)}><AddShoppingCartIcon fontSize="small"/></button>
                )}
            </div>

        </div>
    )


}

export default ProductCard;