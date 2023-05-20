import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({products, shoppingCart, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard
          product={p}
          quantity={shoppingCart.find(element => element.itemId === p.id)?.quantity}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={false}
          key={p.name}/>
      ))}
    </div>
  )
}
