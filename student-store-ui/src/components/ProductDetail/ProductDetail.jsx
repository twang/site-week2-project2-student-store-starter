import * as React from "react"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import NotFound from "../NotFound/NotFound"
import ProductView from "../ProductView/ProductView"
import "./ProductDetail.css"

export default function ProductDetail({handleAddItemToCart, handleRemoveItemToCart}) {
  const { productId } = useParams()
  const [product, setProduct] = useState()
  const [isFetching, setIsFetching] = useState(true)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true)
        console.log("fetch https://codepath-store-api.herokuapp.com/store/" + productId);
        const transactionsRes = await axios.get("https://codepath-store-api.herokuapp.com/store/" + productId)
        if (transactionsRes?.data?.product) {
          setProduct(transactionsRes.data.product)
        }
      } catch (err) {
        console.log({ err })
        return <NotFound />
      }

      setIsFetching(false)
    }

    fetchData()
  }, [])

  if (isFetching) {
    return <h1 className="loading">Loading...</h1>
  } else {
    return (
      <div className="product-detail">
        <ProductView product={product} productId={productId}></ProductView>
        test
      </div>
    )
  }
}
