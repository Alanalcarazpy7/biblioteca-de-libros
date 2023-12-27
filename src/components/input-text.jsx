import React from 'react'
import { useState } from 'react'

export default function InputText(props) {

  return (
    <div className='contenedor-input'>
      <p>{props.name}</p>
      <input name={props.name} type={props.type} accept='image/*' onChange={props.onChange} value={props.value}/>
    </div>
  )
}
