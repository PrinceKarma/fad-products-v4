import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Storefront, ShoppingCart, Heart } from 'phosphor-react';
import { ShopContext } from "../context/shop-context";


import "./navbar.css";


export const Navbar = () => {
    const { cartProducts } = useContext(ShopContext);
    const cartTotalQuantity = Object.values(cartProducts).reduce((sum, count) => sum + count, 0);
    return (
        <div className="navbar">
            <div className="links">
                <div className="site-name">
                    <Link to="/">Fad Products</Link> 
                </div>

                <div className="right-elements"> {/* Container for right-aligned elements */}
                    <Link to="/">
                        <div className="navbar-element">
                            <Storefront size={30} />
                            <div className="navbar-element-subtext">Shop</div>
                        </div>
                    </Link>
                    <Link to="/wishlist">
                        <div className="navbar-element">
                            <Heart size={30} />
                            <div className="navbar-element-subtext">WishList</div>
                        </div>
                    </Link>
                    <Link to="/cart">
                        <div className="navbar-element">
                            <span className="nav-icon"><ShoppingCart size={30} /></span>
                            <span className="cart-badge" style={{ visibility: cartTotalQuantity > 0 ? "visible" : "hidden" }}>{cartTotalQuantity}</span>
                            <div className="navbar-element-subtext">Cart</div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
