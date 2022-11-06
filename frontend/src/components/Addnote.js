import React,{useState,useContext} from "react";
import NoteContext from '../context/notes/noteContext'
import logo from "../images/image.png";

function Addnote() {
    const context = useContext(NoteContext);
    const {addNote, getNotes} = context;

    const [note, setNote] = useState({title:"",description:"",tag:""})
    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        getNotes();
        setNote({title:"",description:"",tag:""})
    }
    const onChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }
    // additional setting for Adding notes
    const [display, setDisplay] = useState("none");
    const [rotate, setRotate] = useState("");
    const handleAddNote =(e)=>{
        e.preventDefault();
        setDisplay(display==="none"?"block":"none");
        setRotate(rotate==="rotationForward"?"rotationReverse":"rotationForward");
    }
    return (
        <div>
            <div className="Add-note"><span className="A">A</span><span className="dd-note">dd Note</span></div>
            <div className="image"  style={{cursor:"pointer"}}><img onClick={handleAddNote} src={logo} style={{animation:`${rotate} 0.3s linear 0s 1 forwards`}} className="img" alt="images"></img></div>
            <div className="container my-4" style={{display: `${display}`}}>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            aria-describedby="emailHelp"
                            onChange={onChange}
                            value={note.title}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Description
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            value={note.description}
                            onChange={onChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Tag
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            name="tag"
                            value={note.tag}
                            onChange={onChange}
                        />
                    </div>
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-success" onClick={handleClick}>Add Note</button>
                </form>
            </div>
        </div>
    );
}

export default Addnote;
