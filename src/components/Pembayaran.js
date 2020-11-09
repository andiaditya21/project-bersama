import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pembayaran extends Component{
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
                <h2>Payment</h2>
                <p className="text-muted">validate your payment information</p>
            </div>
        </div>
        
        <div className='row justify-content-center'>
            <div className="col-lg-5 ">
                <form>
                    <div className="form-group text-muted">
                    <label for="nama_depan">FirstName</label>
                    <input type="text" class='form-control' id="nama_depan" placeholder="Nama Depan" />
                    </div>
                    <div class="form-group text-muted">
                        <label for="nama_belakang">LastName</label>
                        <input type="text" class="form-control" id="nama_belakang" placeholder="Nama Belakang" />
                      </div>
                      <div class="form-group text-muted">
                        <label for="card">Card Number</label>
                        <input type="tel" class="form-control" id="card" placeholder="masukan nomer kartu anda" />
                      </div>
                      <div class="form-group text-muted">
                        <label for="kadaluarsa">Expired Date(MM/YY)</label>
                        <input type="date" class="form-control" id="kadaluarsa" placeholder="Tanggal Expired"/>
                      </div>
                      <div class="form-group text-muted">
                        <label for="cvv">Security Code(CVV)</label>
                        <input type="tel" class="form-control" id="cvv" placeholder="Kode Keamanan"/>
                      </div>
                      <div class="form-group">
                      <Link to = {'/ModalPembayaran'}>
                <button type="submit" className="btn btn-primary">Submit</button>
                </Link>
                <button type="submit" className="btn btn-primary ml-3 mr-3">Batal</button>
           </div>
                </form>
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

export default Pembayaran;