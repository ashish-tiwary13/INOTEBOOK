import React,{useState} from "react";
import {useNavigate} from 'react-router-dom'

const port = 5000 || process.env.PORT;

const Signup = () => {
    const host=`http://localhost:${port}`;
    const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
    let navigate = useNavigate();
    const onSubmit= async(e)=>{
        e.preventDefault();
        const {name,email,password} =credentials;
        const response = await fetch(`${host}/api/auth/createUser`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({name,email,password})
        });
        const json = await response.json();
        // console.log(port)
        if(json.success){
          // save the auth token and redirect
          localStorage.setItem('token',json.authtoken);
          navigate("/");
        }else{

        }
    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]: e.target.value})
    }
  return (
    <div className="signup">
      <section className="signup-height" style={{backgroundColor: "#eee"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{borderRadius: "25px"}}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4" onSubmit={onSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text"  className="form-control" htmlFor="name" name="name" id="name" value={credentials.name} onChange={onChange} minLength={3} required/>
                            <label className="form-label">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" className="form-control"  htmlFor="email" name="email" id="email" value={credentials.email} onChange={onChange} />
                            <label className="form-label">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" className="form-control"  htmlFor="password" name="password" id="password" value={credentials.password} onChange={onChange} minLength={5} required/>
                            <label className="form-label">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" className="form-control" htmlFor="cpassword" name="cpassword" id="cpassword" value={credentials.cpassword} onChange={onChange} minLength={5} required/>
                            <label className="form-label" >Repeat your password</label>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="submit" className="btn btn-success btn-lg">Register</button>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img type="image" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="something"/>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Signup