import React from 'react'
import Hero from '../components/Hero'
import Products from '../components/ProductsPage/Products'
import productsBcg from '../Images/productsBcg.jpeg'

export default function ProductsPage() {
  return (
    <>
      <Hero img='https://cdn.pixabay.com/photo/2017/05/02/18/20/blueberries-2278921_960_720.jpg'/>
      <Products/>
    </>
  )
}
