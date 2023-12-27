import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../store/store';

export default function View() {
  const [item,setItem]=useState(null)
  const params=useParams();
  const store=useAppContext();

  useEffect(()=>{
    const book=store.getItem(params.bookId);
    setItem(book);
  },[])
  if (!item){
    return <div style={{color:"white",fontSize:"30px",textAlign:"center"}}>Item not found</div>
  }
  return (
    <div className='contenedor-info-libro'>
      <div>{item?.cover ? <img src={item?.cover} width="400px"/>:""}</div>
      <div className='contenedor-info'>
        <h2>{item?.title}</h2>
        <div>{item?.author}</div>
        <div>{item?.intro}</div>
        <div>{item?.completed?"Completado":"No completado"}</div>
        <div>{item?.review}</div>
      </div>
    </div>
  )
}
