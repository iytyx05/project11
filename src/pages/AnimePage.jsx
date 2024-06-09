import React from "react";
import ProductList from "../components/product/ProductList";

const AnimePage = () => {
  return (
    <div>
      <section
        style={{ display: "flex", justifyContent: "center", fontSize: "32px" }}
      >
        <div>
          <h1
            style={{
              color: "#6e6e73",
              letterSpacing: "1.5px",
              fontWeight: "600",
            }}
          >
            <span style={{ color: "rgb(7,7,22)", marginRight: "5px" }}>
              Смотри аниме вместе с нами
            </span>
          </h1>
        </div>
      </section>
      <ProductList />
    </div>
  );
};

export default AnimePage;
