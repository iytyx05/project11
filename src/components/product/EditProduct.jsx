import { Container } from "@mui/material";
import React, { useEffect } from "react";
import Form from "./Form";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";

const EditProduct = () => {
  const { getOneProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  return (
    <Container>
      <Form isEdit={true} />
    </Container>
  );
};

export default EditProduct;
