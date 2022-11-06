import React ,{useContext}from "react";
import NoteContext from "../context/notes/noteContext";

function Noteitem(props) {
    const context =useContext(NoteContext);
    const{deleteNote} = context;
    const { note ,updatenote} = props;
    return (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        <p className="card-text" id="tag-size" style={{fontSize:13}}>{note.tag}</p>
                        <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updatenote(note)}}></i>
                    </div>
                </div>
            </div>
            );
}

            export default Noteitem;
