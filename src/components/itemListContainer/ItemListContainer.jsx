import React from "react";
import { getArray } from "../helpers/getArray";
import { array } from "../../data/data";
import { useEffect } from "react";
import { useState } from "react";
import { ItemList } from "./ItemList";
import { CartWidget } from "../CartWidget";
import { ItemCount } from "../ItemCount";



export const ItemListContainer = ({greeting}) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        getArray(array)
            .then(res=> setProducts(res))
            .catch(err=> console.log(err))
            .finally(()=> setLoading(false))
    },[])

    return (
        <> 
        <CartWidget/>
        <ItemCount/>
        </>
    )
}