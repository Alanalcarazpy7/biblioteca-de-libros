import React, { useState } from 'react'
import InputText from '../components/input-text'
import { useAppContext } from '../store/store'
import { v4 as uuidv4 } from 'uuid';



export default function Create() {
  const [title,setTitle]=useState("");
  const [author,setAuthor]=useState("");
  const [cover,setCover]=useState("");
  const [intro,setIntro]=useState("");
  const [completed,setCompleted]=useState(false);
  const [review,setReview]=useState("");

  const store=useAppContext();

  

  const handleOnChangeFile=(e=>{
    const element=e.target;
    var file=element.files[0];
    var reader=new FileReader();

    reader.onloadend=function(){
      setCover(reader.result.toString());
    };
    reader.readAsDataURL(file);
  })

  

  const handleChange=(e=>{
    const name=e.target.name;
    const value=e.target.value;

    switch(name){
      case "title":
        
        setTitle(value)
        break;

      case "author":
        setAuthor(value)
        break;

      case "intro":
        setIntro(value)
        break;

      case "completed":
        setCompleted(e.target.checked)
        break;

      case "review":
        setReview(value)
        break;

      default:
        break   
    }

  })

  

  const handleSubmit=(e=>{
    e.preventDefault();
    const newBook={
      id:uuidv4(),
      title:title,
      author:author,
      cover:cover,
      intro:intro,
      completed:completed,
      review:review,
    };
    store.createItem(newBook)
    console.log(newBook)
  })

  return (
    <div className='contenedor-create'>
      <form onSubmit={handleSubmit}>
        <InputText
          name="title"
          type="text"
          onChange={handleChange}
          value={title}
        />
        <InputText
          name="author"
          type="text"
          onChange={handleChange}
          value={author}
        />
        <div className='contenedor-input'>
        <InputText
          name="cover"
          type="file"
          onChange={handleOnChangeFile}
        />
        {cover && <img src={cover} alt="Imagen seleccionada"/>}
        </div>
        <InputText
          name="intro"
          type="text"
          onChange={handleChange}
          value={intro}
        />
        <InputText
          name="completed"
          type="checkbox"
          onChange={handleChange}
          value={completed}
        />
        <InputText
          name="review"
          type="text"
          onChange={handleChange}
          value={review}
        />
        
        <input type='submit' className='button-create' value="Register book"/>
      </form>
  </div>
  )
}
