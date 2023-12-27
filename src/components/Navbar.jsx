import React from 'react';
import { Link } from "react-router-dom";

export default function Desplazamiento() {
  return (
    <div className='contenedor-navbar'>
      <Link to="/" className='link'>
        <h4>Home</h4>
      </Link>
      <Link to="/create" className='link'>
        <h4>Create</h4>
      </Link>
    </div>
  )
}
