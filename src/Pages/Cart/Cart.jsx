import React, { useContext } from "react";
import './Cart.css';
import {StoreContext} from '../../Components/Context/StoreContext'
// import { useNavigate } from "react-router-dom";
import {useNavigate} from "react-router-dom";

const Cart = ()=>{
    const{cartItems, food_list, removeFromCart,getTotalCartAmount} = useContext(StoreContext);
    const navigate = useNavigate();

    return <div className="cart">
        <div className="cart-items">
            <div className="cart-item-titles cart-item-heading">
                <p>Items</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item,index)=>{
                if(cartItems[item._id]>0){
                    return <div>
                     <div className="cart-item-titles cart-items-item">
                        <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price}₹</p>
                    <p>{cartItems[item._id]} </p>
                    <p>{item.price*cartItems[item._id]}₹ </p>
                    <p onClick={()=>removeFromCart(item._id)} className="cursor">x</p>
                   
                    </div>
                    <hr />
                    </div>
                }
            })}
        </div>
        <div className="cart-bottom">
            <div className="cart-totals">
                <h2>Cart Totals</h2>
                <div>
                <div className="cart-total-details">
                    <p>Subtotals</p>
                    <p>{getTotalCartAmount()}₹</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <p>Delivery Fee</p>
                    <p>{getTotalCartAmount()===0?0:20}₹</p>
                </div>
                <hr />
                <div className="cart-total-details">
                    <b>Total</b>
                    <b>{getTotalCartAmount()===0?0: getTotalCartAmount()+20}₹</b>
                </div>
            </div>
            <button onClick={()=>navigate('/order')} >Proceed To Checkout</button>
            </div>
            <div className="cart-promocode">
                <div>
                    <p>If you have a promocode, Enter it here</p>
                    <div className="cart-promocode-input">
                        <input type="text" placeholder="promocode" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
}
export default Cart;