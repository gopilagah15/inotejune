import React, { useState } from 'react'
import noteContext from './noteContext'

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "665f6dc3b196eec74d325eaf",
          "user": "665f6d70b196eec74d325eab",
          "title": "Lets Learn Python",
          "description": "Python",
          "tag": "default",
          "date": "2024-06-04T19:40:51.545Z",
          "__v": 0
        },
        {
          "_id": "665f6dd0b196eec74d325eb1",
          "user": "665f6d70b196eec74d325eab",
          "title": "Lets Learn React",
          "description": "React is nice",
          "tag": "default",
          "date": "2024-06-04T19:41:04.586Z",
          "__v": 0
        },
        {
          "_id": "665f6ddeb196eec74d325eb3",
          "user": "665f6d70b196eec74d325eab",
          "title": "Lets Learn Django",
          "description": "React is Django",
          "tag": "default",
          "date": "2024-06-04T19:41:18.847Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesInitial)
  return (
    <noteContext.Provider value={{notes,setnotes}}>
      {props.children}
    </noteContext.Provider>
  )
}

export default NoteState
