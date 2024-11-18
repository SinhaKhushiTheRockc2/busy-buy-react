// Importing third party modules
import { createContext, useContext, useEffect, useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "./firebaseInit";
import { toast } from "react-toastify";

// Creating context
const productContext = createContext();

// Function to access the context values easily
function useProductValue() {
  const value = useContext(productContext);
  return value;
}

// Custom Context function
function CustomContext({ children }) {
  // ----------------Defining states------------------------
  // state for products
  const [products, setProducts] = useState([]);
  // state for loading status
  const [loading, setLoading] = useState(true);
  // state for cart
  const [cart, setCart] = useState([]);
  // state for calculating total price
  const [total, setTotal] = useState(0);
  // State for purchase status
  const [isPurchased, setIsPurchased] = useState(false);
  // state for orders
  const [orders, setOrders] = useState([]);
  // state for search query
  const [searchQuery, setSearchQuery] = useState("");

  // Fetching all the products from the collection on initial render
  useEffect(() => {
    const fetchData = async () => {
      onSnapshot(collection(db, "products"), (snapshot) => {
        const products = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        // Setting the products
        setProducts(products);
        setLoading(false);
      });
    };

    fetchData();
  }, []);

  // Function to handle add to cart functionality
  const handleAddToCart = (prod) => {
    // Finding index
    console.log(prod);
    const index = cart.findIndex((item) => item.id === prod.id);
    if (index === -1) {
      // If index doesn't exist, add product to cart with quantity 1
      const newCart = [...cart, { ...prod, qty: 1 }];
      setCart(newCart);
      setTotal(total + prod.Price); // Update total based on new product added
      console.log(cart);
      console.log(total);
    } else {
      // If product already exists in cart, increase its quantity
      const updatedCart = cart.map((item, idx) =>
        idx === index ? { ...item, qty: item.qty + 1 } : item
      );
      setCart(updatedCart);
      setTotal(total + prod.Price); // Update total based on existing product quantity change
      console.log(cart);
      console.log(total);
    }
  };

  // Function that handles quantity removal of an item present in cart
  const handleRemoveQuantity = (prod) => {
    // finding the index of the cart item to be removed
    console.log(prod.id);
    const index = cart.findIndex((item) => item.id === prod.id);

    // If the index exists
    if (index !== -1) {
      const updatedCart = [...cart];
      updatedCart[index].qty--;
      setTotal(total - updatedCart[index].Price);

      if (updatedCart[index].qty === 0) {
        updatedCart.splice(index, 1);
      }

      setCart(updatedCart);
      console.log(updatedCart);
    }
  };

  // Handle remove a cart element from the cart
  const handleRemoveFromCart = (prod) => {
    // Finding the index
    console.log(prod.id);
    const index = cart.findIndex((item) => item.id === prod.id);
    // If the index exists
    if (index !== -1) {
      // Removing the item from the cart
      const updatedCart = cart.filter((item) => item.id !== prod.id);
      setCart(updatedCart);
      setTotal(total - cart[index].Price);
    }
  };

  // Function that handles order purchase
  const handlePurchase = () => {
    // Add cart items to orders with the current date
    const date = new Date().toISOString();
    const newOrders = cart.map((item) => ({
      ...item,
      orderDate: date,
      totalPrice: total,
    }));
    setOrders([...orders, ...newOrders]);
    // Clear cart
    setCart([]);
    // Reset total
    setTotal(0);
    // Set purchase status
    setIsPurchased(true);
    // Notify user
    toast.success("Purchase successful!");
  };

  // Function to handle search query change
  const handleSearchChange = (query) => {
    setSearchQuery(query.trim().toLowerCase());
  };

  return (
    <>
      {/* Provider */}
      <productContext.Provider
        value={{
          products,
          loading,
          cart,
          setCart,
          handleRemoveQuantity,
          handleAddToCart,
          handleRemoveFromCart,
          total,
          isPurchased,
          orders,
          handlePurchase,
          searchQuery,
          handleSearchChange,
        }}
      >
        {children}
      </productContext.Provider>
    </>
  );
}

// named export statement
export { useProductValue };

// Exporting CustomContext
export default CustomContext;
