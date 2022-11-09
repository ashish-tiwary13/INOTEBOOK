import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const port = 5000 || process.env.PORT;

const Login = () => {
  
  const host=`http://localhost:${port}`;
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // console.log(json);
    if (json.success) {
      // save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      // console.log(json.authToken);
      navigate("/");
    } else {
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                      <img
                        type="image"
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid"
                        alt="something"
                      />
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                      <form onSubmit={onSubmit}>
                        <div className="container">
                          <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-4">
                            Login
                          </p>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            onChange={onChange}
                            value={credentials.email}
                          />
                          <label
                            className="form-label"
                            htmlFor="form1Example13"
                          >
                            Email address
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            className="form-control form-control-lg"
                            type="password"
                            id="password"
                            name="password"
                            value={credentials.password}
                            onChange={onChange}
                          />
                          <label
                            className="form-label"
                            htmlFor="form1Example23"
                          >
                            Password
                          </label>
                        </div>
                        <div className="conatiner d-flex justify-content-center align-items-center">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg btn-block"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
