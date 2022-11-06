import React,{useState,useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const [display, setDisplay] = useState("block");
  const [displayforlogout, setDisplayforlogout] = useState("block");

  let Navigate = useNavigate();
  const handleOnChange =(e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    Navigate('/login');
  }
  useEffect(() => {
    setDisplay(!localStorage.getItem('token')?"block":"none")
    setDisplayforlogout(!localStorage.getItem('token')?"none":"block")
  }, [handleOnChange])
  
  
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to="/">
            iNotebook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <Link className="btn btn-success mx-1" style={{display:`${display}`}} to="/login" role="button">
                LogIn
              </Link>
              <Link className="btn btn-success mx-1" style={{display:`${display}`}} to="/signup" role="button">
                SignUp
              </Link>
              <Link className="btn btn-success mx-1" style={{display:`${displayforlogout}`}} onClick = {handleOnChange} to="/signup" role="button">
                LogOut
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
