import React from 'react'
import Navbar from '../navbar/Navbar'
import ProductList from '../product/components/ProductList'
const Home = () => {
  return (
    <div>
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  )
}

export default Home
