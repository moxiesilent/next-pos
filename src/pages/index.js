import Layout from "@/components/layouts/Layout";
import { useEffect, useState } from "react";
import api from "@/api";
import styles from "@/styles/Home.module.css"
import ProductList from "@/components/elements/productList/ProductList";
import Cart from "@/components/elements/cart/Cart";

export default function Home() {
  const [products, setProducts] = useState([])

  const fetchProduct = async () => {
    const response = await api.get('/products');
    const data = await response.data.payload
    setProducts(data)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <Layout>
      <h1>Home</h1>
      <div className={styles.home}>
        <ProductList products={products}/>
        <Cart/>
      </div>
    </Layout>
  )
}
