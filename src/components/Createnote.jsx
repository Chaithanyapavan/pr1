import React from "react";
import { useState } from "react";
import Note from './Note'
function Createnote() {
 const [arr1,ha]=useState([])
 const [track,uppdate]=useState("")
 const [cont,devl]=useState("")
function deal1(event) {
  const newin=event.target.value
  uppdate(newin)
}
function deal2(event){
  const newinp=event.target.value;
  devl(newinp)
}
 function handle ()
 { 
      ha((prev)=>{
      return([...prev,{title:track,content:cont}]
      )
      })
      uppdate("")
      devl("")
}
function dodelete(id)
{
   ha((prev)=>{
    return(
      prev.filter((ite,index)=>{return index!==id}
    ))
   }
   )
}
   
  return (
    <div>
      <div>
      <form onSubmit={(event)=>event.preventDefault()}>
        <input onChange={deal1}name="title" placeholder="Title" value={track} />
        <textarea onChange={deal2} name="content" placeholder="Take a note..." rows="3" value={cont} />
        <button onClick={handle}>Add</button>
      </form>
      </div>
     {arr1.map((item,index)=>{
      return(
      <Note obj={item} id={index} delete={dodelete}/>
      )
     })}

   </div>
  );
}

export default Createnote;
