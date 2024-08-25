/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { ShopContext } from '../context/ShowContext'

const LatestCollection = () => {

    const {products} = useContext(ShopContext);

    console.log(products);
    

  return (
    <div>
      
    </div>
  )
}

export default LatestCollection