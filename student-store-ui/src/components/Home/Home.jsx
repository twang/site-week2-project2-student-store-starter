import * as React from "react"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home({products, shoppingCart, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <Hero />
      <ProductGrid
        products={products}
        shoppingCart={shoppingCart}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemToCart={handleRemoveItemToCart}/>
    </div>
  )
}
