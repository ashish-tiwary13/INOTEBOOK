import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host="http://localhost:5000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  //    Get all Note
  const getNotes = async () => {
    // TODO: API Call
    const response = await fetch(`${host}/api/note/fetchallnote`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },

    });
    const json = await response.json();
    setNotes(json);
    // console.log("json");
  };

  //    Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/note/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },

      body: JSON.stringify({title,description,tag})
    });
    const json = response.json();
    setNotes(notes.concat(json));
  };
  // Delete a note
  const deleteNote = async (id) => {
    // TODO: API Call
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },

    });
    // eslint-disable-next-line
    const json = response.json();
    // console.log(json)
    // 
    const newNotes = notes.filter((note => { return note._id !== id }))
    setNotes(newNotes)
  };
  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token":localStorage.getItem('token')
      },

      body: JSON.stringify({title,description,tag})
    });
    // eslint-disable-next-line
    const json = response.json();
    // console.log(json)
    // Logic to edit in client
    for(let i = 0; i<notes.length; i++) {
        const element =notes[i];
    if (element._id === id) {
      element.title = title;
      element.description = description;
      element.tag = tag;
    }

  }
};

return (
  <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote ,getNotes}}>
    {props.children}
  </NoteContext.Provider>
);
};

export default NoteState;


