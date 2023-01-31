import {Box, Stack, Button} from "@mui/material";
import React from "react";
import "./Header.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../utils/CartContext";

const Header = () => {


    const {totalItems} = useCartContext();

    return (
        <div className="header">
            <Link to='/' style={{textDecoration: "none"}}>
                <span className="nav-heading">TeeRex Store</span>
            </Link>

            <div className="cart-link">
                <div className="qty-badge">
                    <p>{totalItems}</p>
                </div>
                <Link to="/cart">
                    <ShoppingCartIcon fontSize="large" className="shopping-cart-link" />
                </Link>
            </div>

        </div>
    );
}

export default Header;