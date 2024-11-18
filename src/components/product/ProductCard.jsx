// Importing necessary modules and styles
import { useProductValue } from "../../productContext";
import { useAuthValue } from "../authentication/Auth";
import style from "./Product.module.css";
import { useNavigate } from "react-router";

// Product card component
function ProductCard({priceRange,categoryFilters}) {
  // Fetching products, loading state, and searchQuery from the productContext
  const { products, loading, handleAddToCart, searchQuery } = useProductValue();
  // Fetching values from auth context
  const { isSignedIn } = useAuthValue();

  // useNavigate hook
  const navigate = useNavigate();

  // Function to handle add to cart functionality
  const handleAdd = (product) => {
    if (isSignedIn) {
      handleAddToCart(product);
      navigate('/cart');
    } else {
      navigate('/signin');
    }
  };

  // Filter products based on search query, price range, and category filters
  const filteredProducts = products.filter((product) =>
    (product.ProductName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.Type.toLowerCase().includes(searchQuery.toLowerCase())) &&
    product.Price >= priceRange.minPrice &&
    product.Price <= priceRange.maxPrice &&
    (categoryFilters.shirt ? product.Type === "Shirt" : true) &&
    (categoryFilters.pants ? product.Type === "Pants" : true)
    // Add more category filters as needed
  );

  return (
    <>
      {/* Product Listing */}
      {loading ? (
        <h1 style={{ margin: 'auto',width:"30%" }}>
          <img src="https://i.pinimg.com/originals/71/3a/32/713a3272124cc57ba9e9fb7f59e9ab3b.gif" alt="loading" />
        </h1>
      ) : filteredProducts.length === 0 ? (
        <h1 style={{textAlign:"center",marginTop:"4%",color:"#0c4bd4"}}>No products found.</h1>
      ) : (
        <div className={style.productCardList}>
          {filteredProducts.map((product) => (
            <div className={style.productCardContainer} key={product.id}>
              <div className={style.productImageContainer}>
                {/* Product image */}
                <img src={product.ProductImage} alt={product.ProductName} />
              </div>
              <div className={style.productDetailsContainer}>
                {/* Product name */}
                <h1>{product.ProductName}</h1>
                {/* Product price */}
                <h2>&#8377; {product.Price}</h2>
                {/* Add to cart button */}
                <button onClick={() => { handleAdd(product) }}>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

// Default export statement
export default ProductCard;
