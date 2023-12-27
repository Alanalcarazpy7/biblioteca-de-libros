import React from 'react'
import Libros from '../components/Libros';
import portadaLibro1 from '../images/portadas-libro.jpg'; 

export default function Home() {
  return (
    <div className='contenedor-de-libros'>
      <Libros/>
    </div>
  )
}
