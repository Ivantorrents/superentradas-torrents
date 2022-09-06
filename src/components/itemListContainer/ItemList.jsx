import React from 'react'
import { Item } from './Item'

export const ItemList= ({item}) => {
  return (
    <>
    <Item/>
    {
        item.map((item)=><item key={item.id}{...item}/>)
        }
    
    </>
  )
}

