import { FaFilter } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectCategory, setSelectCategory] = useState("all");
  const [sortingOption, setSortingOption] = useState();

  const fetchProduct = async () => {
    try {
      const response = await fetch("/product.json");
      const data = await response.json();
      setProducts(data);
      setFilteredItems(data);
    } catch (error) {
      console.log("fetch error", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  // console.log(products)

  // filter functionality

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? products
        : products.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectCategory(category);
  };
  const showAll = () => {
    setFilteredItems(products);
    selectCategory("all");
  };

  // sorting functionality
  const handleSortingChange = (option) => {
    setSortingOption(option);
    let sortedItems = [...filteredItems];
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      default:
        break;
    }
    setFilteredItems(sortedItems);
  };

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4 mb-12">
      <h2 className="title">Fashion & Trending Products</h2>
      <div>
        <div className="flex flex-col flex-wrap md:flex-row items-center md:justify-between space-y-3 mb-8">
          <div className="flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap">
            <button onClick={() => showAll()}>All Products</button>
            <button onClick={() => filterItems("Dress")}>Clothing</button>
            <button onClick={() => filterItems("Bag")}>Bag</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItems("Shoe")}>Shoes</button>
            <button onClick={() => filterItems("Glasses")}>SunGlasses</button>
          </div>

          <div className="flex justify-end mb-4 rounded-sm">
            <div className="bg-Black p-2">
              <FaFilter className="text-white w-4 h-4" />
            </div>
            <select
              id="sort"
              value={sortingOption}
              onChange={(e) => handleSortingChange(e.target.value)}
              className="bg-Black text-white rounded-sm px-2 py-1"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="high-to-low">High to Low</option>
              <option value="low-to-high">Low to High</option>
            </select>
          </div>
        </div>

        <ProductCard filterProducts={filteredItems} />
      </div>
    </div>
  );
};

export default Product;
