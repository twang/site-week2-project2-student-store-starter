import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductCard.css"

export default function ProductCard({product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart, showDescription}) {
  return (
    <div className="product-card">
      <div className="product-name">
        {product.name}
      </div>
      <div className="product-price">
        ${product.price.toFixed(2)}
      </div>
      {showDescription &&
      <div className="product-description">
        {product.description}
      </div>}
      <div className="media">
        <Link to={"products/" + product.id}>
          <img src={product.image}></img>
        </Link>
      </div>
      <button className="add" onClick={(e) => handleAddItemToCart(product.id)}>+</button>
      <button className="add" onClick={(e) => handleRemoveItemToCart(product.id)}>-</button>
      {quantity &&
      <div className="product-quantity">
        {quantity}
      </div>}
    </div>
  )
}
