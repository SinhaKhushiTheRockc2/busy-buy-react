// Importing css
import style from "./Home.module.css"
import ProductCard from "../../components/product/ProductCard";
import { useProductValue } from "../../productContext";
import FilterProducts from "../../components/product/FilterProducts";
import { useState } from "react";

function Home(){
    // State to handle filter option visibility
    const [showFilter,setShowFilter]=useState(false);
    // Fetching necessary value from product context
    const{searchQuery,handleSearchChange}=useProductValue();
    // State for price range filter
  const [priceRange, setPriceRange] = useState({
    minPrice: 1,
    maxPrice: 200000,
  });

  // State for category filters
  const [categoryFilters, setCategoryFilters] = useState({
    shirt: false,
    pants: false,
    // Add more categories as needed
  });

  // Function to handle price range slider change
  const handlePriceChange = (event) => {
    const { valueAsNumber, name } = event.target;
    setPriceRange({
      ...priceRange,
      [name]: valueAsNumber,
    });
  };

  // Function to handle category checkbox change
  const handleCategoryChange = (event) => {
    const { id, checked } = event.target;
    setCategoryFilters({
      ...categoryFilters,
      [id]: checked,
    });
  };
    return(
        <>
        {/* Search Bar */}
        <div className={style.parentContainer}>
        <form className={style.inputContainer}>
            <input type="text" className={style.searchBar} placeholder="Search Product By Name..." value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}/>
        </form>
        <button onClick={()=>setShowFilter(true)} className={style.filterBtn}>Filter Products</button>
        </div>
        {showFilter && <FilterProducts priceRange={priceRange} handleCategoryChange={handleCategoryChange} handlePriceChange={handlePriceChange} categoryFilters={categoryFilters} setShowFilter={setShowFilter}/>}
        <ProductCard priceRange={priceRange} categoryFilters={categoryFilters}/>
        </>
    )
}

// Default export statement
export default Home;