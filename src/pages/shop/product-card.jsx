import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shop-context";
import { Heart, ShoppingCart } from 'phosphor-react';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartProducts, addToWishList, removeFromWishList, isProductInWishList } = useContext(ShopContext);

  const cartProductCount = cartProducts[id];
  const isInWishlist = isProductInWishList(id);

  return (
    <div className="product">
      <Link to={`/product/${id}`}>
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>{productName}</p>
          <p>${price.toFixed(2)}</p>
        </div>
      </Link>
      <div className="productActions">
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          <ShoppingCart size={20} style={{marginRight: '0.5rem'}} />
          Add To Cart {cartProductCount > 0 && <> ({cartProductCount})</>}
        </button>
        <button 
          className="addToWishListBttn" 
          onClick={() => isInWishlist ? removeFromWishList(id) : addToWishList(id)}
        >
          <Heart 
            size={20} 
            weight={isInWishlist ? "fill" : "regular"} 
            color={isInWishlist ? 'red' : '#4299E1'}
          />
        </button>
      </div>
    </div>
  );
};