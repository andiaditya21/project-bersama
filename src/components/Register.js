import React, { Component } from "react";
import { Link } from "react-router-dom";

import Img_1 from "../img/img_1.jpg";

export default class Register extends Component {
  regist = (e) => {
    e.preventDefault();
    let name = e.target.elements.nama.value;
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    let numberPhone = e.target.elements.phone.value;
    // alert(`${name}, ${email}, ${password}, ${numberPhone}`);
    if (
      name === "digitalent" &&
      email === "dts@kominfo.com" &&
      password === "1234" &&
      numberPhone === "11111"
    ) {
      alert("Regist Anda Success! silahkan beralih ke Halaman login.");
      this.props.history.push("/");
    } else {
      alert("bad news");
    }
  };

  render() {
    return (
      <>
        <div className="container" style={{ marginTop: 60 }}>
          <h2 className="text-center mb-3" style={{ fontFamily: "Itim" }}>
            Register
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
              <form method="post" onSubmit={this.regist}>
                <div className="form-group">
                  <label htmlFor="nama">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nama"
                    placeholder="Fill your Name, Please"
                    required
                  />
                </div>
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
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="phone"
                    placeholder="Fill your Phone Number, Please"
                    required
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-primary text-center px-5"
                  >
                    Sign Up
                  </button>
                  <p className="mt-1" style={{ fontSize: 14 }}>
                    Have an account?{" "}
                    <Link to="/" style={{ textDecoration: "none" }}>
                      {" "}
                      Login
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
