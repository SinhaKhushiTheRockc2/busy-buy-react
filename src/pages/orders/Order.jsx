// Importing css
import { useProductValue } from "../../productContext";
import style from "./Order.module.css";

function Order(){
    // Fetching orders from product context
    const {orders}=useProductValue();

    // Function to format date as day/month/year
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; // Months are zero indexed, so we add 1
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    console.log(orders);
    return (
        <>
        {orders.length===0?(<h1 className={style.defaultOrder}>No Orders Yet</h1>):(<>
        <h1 className={style.hPrimary}>Your Orders</h1>
        <h2 className={style.hSecondary}>Ordered On:<span>{formatDate(orders[0].orderDate)}</span></h2>
        <table>
            <thead>
                <th>
                    Title 
                </th>
                <th>
                    Price
                </th>
                <th>
                    Quantity
                </th>
                <th>
                    Total Price
                </th>
            </thead>
            <tbody>
                {orders.map((item)=>{
                    return(
                    <tr>
                    <td>{item.ProductName}</td>
                    <td>{item.Price}</td>
                    <td>{item.qty}</td>
                    <td>{item.qty*item.Price}</td>
                </tr>
                    )
                })}
                <tr>
                <td colSpan="3" style={{fontWeight:"bolder",fontSize:"1.3rem"}}>Total:</td>
                <td style={{fontWeight:"bolder",fontSize:"1.3rem"}}>&#8377; {orders[0].totalPrice}</td>
                </tr>
            </tbody>
        </table>
        </>)}
        </>
    )
}


export default Order;