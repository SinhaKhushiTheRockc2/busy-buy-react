// Importing css
import { useNavigate } from "react-router";
import { useProductValue } from "../../productContext";
import style from "./Cart.module.css";

function Cart() {
    // Fetching cart from products context
    const { cart,handleAddToCart,handleRemoveQuantity,handleRemoveFromCart,total,isPurchased,handlePurchase} = useProductValue();
    // usenavigate hook
    const navigate=useNavigate();
    
    // if purchase status is successful then navigate to orders page
    if(isPurchased){
        navigate('/order');
    }
    return (
        <>
        {cart.length>0?(<>
        {/* Total price displayed at the top*/}
        <div className={style.totalPriceContainer}>
            <h1>Total Price: &#8377;{total}</h1>
            <button onClick={handlePurchase}>Purchase</button>
        </div>
            <div className={style.cartItemsList}>
                {cart.map((item) => (
                    // Image container
                    <div key={item.id} className={style.itemCardContainer}>
                        <div className={style.itemImageContainer}>
                            <img src={item.ProductImage} alt={item.ProductName} />
                        </div>
                        <div className={style.itemDetailsContainer}>
                            {/* Product name */}
                            <h1>{item.ProductName}</h1>
                            {/* Product price */}
                            <h2>&#8377; {item.Price}</h2>
                            <div className={style.itemQuantityContainer}>
                                {/* Increase quantity */}
                               <img src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png" alt="add-qty" onClick={()=>{handleAddToCart(item)}}/>
                                <h2>Quantity:{item.qty}</h2>
                                {/*Decreasequantity   */}
                               <img src="https://cdn-icons-png.flaticon.com/128/4436/4436695.png" alt="remove-qty" onClick={()=>{handleRemoveQuantity(item)}}/>
                            </div>
                            {/* Remove from cart button */}
                            <button onClick={()=>{handleRemoveFromCart(item)}}>Remove from cart</button>
                        </div>
                    </div>
                ))}
            </div></>):(<h1 className={style.defaultCart}>Cart Is Empty</h1>)}
        </>
    );
}

// Default export
export default Cart;

