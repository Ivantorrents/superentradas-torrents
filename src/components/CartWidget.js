import React from 'react'
import { BsFillCartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export const CartWidget = () => {
  return (
    <div>
    <Link to={"/cart"} style={{color:'white'}} > 
    <BsFillCartFill></BsFillCartFill>
    </Link>
    </div>

  )
};


