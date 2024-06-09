import React, { useEffect, useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";
import PaginationControlled from "./Pagination";
import SearchIcon from "@mui/icons-material/Search";
import { TextField } from "@mui/material";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [filteredAnime, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product => {
        const productName = product.title || ""; 
        return productName.toLowerCase().includes(searchValue.toLowerCase());
        })
    );
    console.log(products)
  }, [searchValue, products]);

  // !PAGINATION
  const itemPerPage = 3;
  const count = Math.ceil(filteredAnime.length / itemPerPage);
  const currentData = () => {
    const begin = (page - 1) * itemPerPage;
    const end = begin + itemPerPage;
    return filteredAnime.slice(begin, end);
  };

  const handleChangePage = (e, value) => {
    setPage(value);
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <div style={{ width: "100%", display: "flex", alignItems: "center", marginBottom: "20px" }}>
        <SearchIcon style={{ marginRight: "10px" }} />
        <TextField
          value={searchValue}
          onChange={handleSearchChange}
          placeholder="Search by product name"
          variant="outlined"
          fullWidth
        />
      </div>

      {filteredAnime.length > 0 ? (
        currentData().map((elem) => <ProductCard key={elem.id} elem={elem} />)
      ) : (
        <h2>No products found</h2>
      )}

       <PaginationControlled
        page={page}
        count={count}
        handleChange={handleChangePage}
      />
    </div>
  );
};

export default ProductList;
