import React, { useState } from 'react'
import noteContext from './noteContext'

const NoteState = (props) => {
  const host = "http://localhost:5000" 
    const notesInitial = []
      const [notes, setnotes] = useState(notesInitial);
      const getAllNotes=async(id)=>{
         //API CALL

    const response = await fetch(`${host}/api/notes/fetchallnotes/${id}`, {
      method: "GET",    
         headers: {
          "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
         },  
             });
    const json = await response.json();   
    console.log(json)



      }
      const addNote=async(title,description,tag)=>{
 //API CALL

    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",    
         headers: {
          "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
         },
             body: JSON.stringify({title,description,tag}),  
             });
    const json = await response.json();   
    console.log(json)

             const note={
              "_id": "665f6ddeb196eec74d325eb3",
              "user": "665f6d70b196eec74d325eab",
              "title": "Lets Learn Django",
              "description": "React is Django",
              "tag": "default",
              "date": "2024-06-04T19:41:18.847Z",
              "__v": 0
             }
            setnotes(notes.concat(note))

      }
      const editNote=async(id,title,description,tag)=>{
 //API CALL

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",    
         headers: {
          "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
         },
             body: JSON.stringify({title,description,tag}),  
             });
    const json = await response.json();   
    console.log(json);





      }
      const deleteNote=async(id)=>{
         //API CALL

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",    
         headers: {
          "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
         },   
             });
    const json = await response.json();   
    console.log(json)




      }
  return (
    <noteContext.Provider value={{notes,setnotes,getAllNotes,addNote,editNote,deleteNote}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
