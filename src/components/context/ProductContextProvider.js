import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import React from "react";
import { API } from "../../helpers/const";

const productContext = createContext();
export const useProducts = () => useContext(productContext);
const ProductContextProvider = ({ children }) => {
  const INIT_STATE = {
    products: [],
    oneProduct: {},
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  // ! get
  const getProducts = async () => {
    const { data } = await axios(`${API}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  // ! create
  const createProduct = async (newProduct) => {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  //! GETONEPRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };
  // ! edit
  const editProduct = async (id, editedProduct) => {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  };
  // ! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };
  const values = {
    createProduct,
    getProducts,
    products: state.products,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    deleteProduct,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
