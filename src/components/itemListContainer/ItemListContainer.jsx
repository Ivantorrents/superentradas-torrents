import React from 'react'
import { getArray } from '../helpers/getArray'
import { array } from '../../data/data'
import { useEffect } from 'react'
import { useState } from 'react'
import { ItemList } from './ItemList'
import "./ItemListContainer.scss"

export const ItemListContainer = () => {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

useEffect(() => {
  getArray(array)
    .then(res=>setProducts(res))
    .catch(err=>console.log(err))
    .finally(()=> setLoading(false))
}, [])

  return (
    <div id='item-list-container' >  
      {
        loading?
          <div>Cargando...</div>
          :
          <ItemList items={products}/>
      }
    </div>
  )
}