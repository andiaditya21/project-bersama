import React, { Component } from 'react'
import '../../styleD.css';
import logo from '../../payment.svg';
import { Link } from 'react-router-dom';

class ModalPembayaran extends Component{
    render(){
        return (
      <div> 
      <nav class="navbar navbar-dark mr-auto bg-dark">
        <button class="btn btn-danger ml-5" href="#">Logo</button>
        <button className="btn mr-5 btn-danger" href="#">Keluar</button>
      </nav>
      <section>
      <div class="container ">
              <div className="row mt-5">
                  <div className="col-sm-12 text-center">
                    <img src={logo}  className=""/>
                    <div className="mt-5" />
                      <h2>Payment successful</h2>
                      <p className="text-muted ">Your payment information has sent your email</p>
                  </div>
              </div>
              
              
              </div>
              </section>
              <footer className='bg-dark'>
          <div class="container text-center">
              <div class="row">
      <div class="col-sm-12">
          <p className='text-light'>&copy; copyright 2020 | built by FE - 18</p>
      </div>
              </div>
          </div>
          
      </footer>
              </div>
    )
}
}

export default ModalPembayaran;