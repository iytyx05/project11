import Navbar from "./components/product/Navbar"
import "./HomePage/assets/styles/main.css"
import React from "react"
import MainRoutes from "./routes/MainRoutes"
import ProductContextProvider from "./components/context/ProductContextProvider"

const App = () => {
  return (
    <div>
      <ProductContextProvider>
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </div>
  )
}

export default App
