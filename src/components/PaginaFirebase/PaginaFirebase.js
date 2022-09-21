import React, { useEffect } from 'react'
import {  getDocs, doc } from 'firebase/firestore'
import { db } from '../../utils/fireBase'



export const PaginaFirebase=()=> {

    
    useEffect(()=>{
        const getDocumento = async()=>{
            const query = doc(db, "SuperEntradas!", 
            "0e256nPH2puzjVzRUt93");
            const response = await getDocs(query);
            const producto = {
                ...response.data(),
                id: response.id
            }
            console.log("productos", producto)
        }
        getDocumento()
    }, [])

  return (
    <div>PaginaFirebase</div>
  )
}
