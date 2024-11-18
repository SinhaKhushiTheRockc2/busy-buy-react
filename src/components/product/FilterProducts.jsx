import style from "./Product.module.css";

const FilterProducts = ({priceRange,handleCategoryChange,handlePriceChange,categoryFilters,setShowFilter}) => {
  return (
    <div className={style.filterContainer}>
      <div className={style.priceRangeContainer}>
        <h3>Price Range:</h3>
        <div>
          <span>Min: ₹{priceRange.minPrice}</span>
          <input
            type="range"
            min="1"
            max="200000"
            step="100"
            value={priceRange.minPrice}
            name="minPrice"
            onChange={handlePriceChange}
            className={style.priceRangeInput}
          />
        </div>
        <div>
          <span>Max: ₹{priceRange.maxPrice}</span>
          <input
            type="range"
            min="1"
            max="200000"
            step="100"
            value={priceRange.maxPrice}
            name="maxPrice"
            onChange={handlePriceChange}
            className={style.priceRangeInput}
          />
        </div>
        <h4>Category</h4>
        <div>
          <input
            type="checkbox"
            id="shirt"
            name="shirt"
            checked={categoryFilters.shirt}
            onChange={handleCategoryChange}
          />
          <label htmlFor="shirt">Shirts</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="pants"
            name="pants"
            checked={categoryFilters.pants}
            onChange={handleCategoryChange}
          />
          <label htmlFor="pants">Pants</label>
        </div>
      </div>
      <div className={style.closeBtn} onClick={()=>setShowFilter(false)}>X</div>
    </div>
  );
};

export default FilterProducts;
