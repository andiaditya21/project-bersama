import React, { Component } from "react";
import { Link } from "react-router-dom";

import Img_1 from "../img/img_1.jpg";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      err: "",
    };
  }

  login = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;

    if (email === "dts@kominfo.com" && password === "1234") {
      alert("Login Berhasil");
      this.props.history.push("/navbar"); //navigation ke halaman navbar
    } else {
      this.setState({
        err: alert("Login Gagal! Email dan password tidak sinkron"),
      });
    }
  };
  render() {
    return (
      <>
        <div className="container" style={{ marginTop: 60 }}>
          <h2 className="text-center mb-3" style={{ fontFamily: "Itim" }}>
            Login
          </h2>
          <div className="row" style={{ marginTop: 40 }}>
            <div className="col-md-6">
              <img
                src={Img_1}
                className="img-fluid"
                alt="Responsive image"
                width="560"
                style={{ borderRadius: 4 }}
              />
            </div>
            <div className="col-md-6 align-self-center my-3">
              <form method="post" onSubmit={this.login}>
                {this.state.err != "" ? this.state.err : ""}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Fill your Email, Please"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Fill your Password, Please"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary text-center px-5"
                  >
                    Login
                  </button>

                  <p className="mt-1" style={{ fontSize: 14 }}>
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="text-primary text-decoration-none"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
