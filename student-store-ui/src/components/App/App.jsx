import * as React from "react"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import NotFound from "../NotFound/NotFound"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import "./App.css"

export default function App() {
  const [products, setProducts] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [checkoutForm, setCheckoutForm] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true)
      try {
        const transactionsRes = await axios.get("https://codepath-store-api.herokuapp.com/store")
        if (transactionsRes?.data?.products) {
          setProducts(transactionsRes.data.products)
        }
      } catch (err) {
        console.log({ err })
        setError(err)
      }

      setIsFetching(false)
    }

    fetchData()
  }, [])

  const handleOnToggle = () => {
    setIsOpen(true)
  }

  const handleAddItemToCart = (productId) => {
    let product = {"itemId": productId, "quantity": 1}

    let existingIndex = shoppingCart.findIndex((p) => (p.itemId === productId))
    // if product does not exists
    if (existingIndex === -1) {
      setShoppingCart(() => [...shoppingCart, product])
    }
    else {
      const newCart = shoppingCart.map((p, i) => {
        if (i === existingIndex) {
          product.quantity = shoppingCart[i].quantity + 1;
          return product;
        } else {
          return p;
        }
      });
      setShoppingCart(() => newCart);
    }
    console.log(shoppingCart)
  }

  const handleRemoveItemToCart = (productId) => {
    // TODO
  }

  const handleOnCheckoutFormChange = (productId) => {
    // TODO
  }

  const handleOnSubmitCheckoutForm = (productId) => {
    // TODO
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/" element={<Home 
                                      products={products}
                                      shoppingCart={shoppingCart}
                                      handleAddItemToCart={handleAddItemToCart}
                                      handleRemoveItemToCart={handleRemoveItemToCart}/>} ></Route>
            <Route path="/products/:productId" element={<ProductDetail />} ></Route>*/
            <Route path="*" element={<NotFound />} ></Route>
          </Routes>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar />
          {/*<Home />*/}
        </main>
      </BrowserRouter>
    </div>
  )
}
