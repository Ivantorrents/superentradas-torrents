import React, { useEffect } from 'react'
import {  getDocs, collection } from 'firebase/firestore'
import { db } from '../../utils/fireBase'



export const PaginaFirebase=()=> {
    
    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, "productos"); 
            const response = await getDocs(query);
            const docs = response.docs;
            const data = docs.map(doc=>{return {...doc.data(), id: doc.id}})
            console.log("data", data)
        }
        getData()
    }, [])
    

  return (
    <div>PaginaFirebase</div>
  )
}
