import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../Navbar/Assests/star_icon.png'
import star_dull_icon from '../Navbar/Assests/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";


const ProductDisplay = (props) =>{
    const {product} = props

    const {addToCart} = useContext(ShopContext)

    return(
        <div className="productdisply">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src= {product.image} alt="product image" />
                    <img src= {product.image} alt="product image" />
                    <img src= {product.image} alt="product image" />
                    <img src= {product.image} alt="product image" />

                </div>
                <div className="productdisplay-image">
                    <img className="productdisplay-main-img" src={product.image} alt="product image" />
                </div>

            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src= {star_icon} alt="star icon" />
                    <img src= {star_icon} alt="star icon" />
                    <img src= {star_icon} alt="star icon" />
                    <img src= {star_icon} alt="star icon" />
                    <img src={star_dull_icon} alt="star_dull_icon" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="productdisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Create Great Gramnet to You
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                            
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span> Women, T- Shirt, Crop Top </p>
                <p className="productdisplay-right-category"><span>Tags :</span> Modern, Latest </p>

            </div>

        </div>
    )
}
export default ProductDisplay