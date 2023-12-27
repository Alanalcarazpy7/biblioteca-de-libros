import React from 'react'
import { useAppContext} from '../store/store'
import { Link } from 'react-router-dom';

export default function Libros() {
  const store=useAppContext();

  return (
    <div className='contenedor-libros'>
      {store.items.map(item=>(
        <Link to={`/view/${item.id}`}>
          <div key={item.id} className='contenedor-img'>
            <img src={item.cover} alt={item.title}/>
            <div className='text'>{item.title}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
