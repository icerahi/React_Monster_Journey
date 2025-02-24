import { useEffect, useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import productData from "./db/data.js";

function App() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [displayProducts, setDisplayProducts] = useState([]);

  const companies = [
    ...new Set(
      productData.map(
        (product) => product.company[0].toUpperCase() + product.company.slice(1)
      )
    ),
  ];
  const categories = [
    ...new Set(productData.map((product) => product.category)),
  ];

  //sidebar category change
  const handleChange = (e) => {
    setSelectCategory(e.target.value);
  };

  //get search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  //recommended
  const handleClick = (e) => {
    setSelectCategory(e.target.value);
  };

  useEffect(() => {
    let products = productData;
    if (searchQuery) {
      products = products.filter(({ title }) =>
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectCategory) {
      products = products.filter(
        ({ category, newPrice, color, company }) =>
          category == selectCategory ||
          newPrice == selectCategory ||
          color == selectCategory ||
          company == selectCategory
      );
    }
    setDisplayProducts(products);
  }, [selectCategory, searchQuery]);

  return (
    <>
      <Sidebar handleChange={handleChange} categories={categories} />
      <Nav searchQuery={searchQuery} handleSearch={handleSearch} />
      <Recommended handleClick={handleClick} companies={companies} />

      <Products products={displayProducts} />
    </>
  );
}

export default App;
