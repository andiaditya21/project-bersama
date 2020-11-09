import React from 'react';
import './UpgradePremium.css'
import { Link } from "react-router-dom";

class UpgradePremium extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='title'>
                    <h2>Upgrade Premium</h2>
                    <p>Choose the service according to your wishes</p>
                </div>
                <div className='category-services row'>
                    <div className='service col-3'>
                        <p>Basic</p>
                    </div>
                    <div className='service col-3'>
                        <p>Standard</p>
                    </div>
                    <div className='service col-3'>
                        <p>Premium</p>
                    </div>
                </div>
                <div class="service-content-container">
                    <div class="row price service-quality">
                        <div class="col-3">
                            Price/Month
                        </div>
                        <div class="col-3">
                            Rp. 50.000
                        </div>
                        <div class="col-3">
                            Rp. 100.000
                        </div>
                        <div class="col-3">
                            Rp. 150.000
                        </div>
                    </div>
                    <div class="row service-quality">
                        <div class="col-3">HD Available</div>
                        <div class="col-3 cheklist">✓</div>
                        <div class="col-3 cheklist">✓</div>
                        <div class="col-3 cheklist">✓</div>

                    </div>
                    <div class=" row service-quality">
                        <div class="col-3">Ultra HD Available</div>
                        <div class="col-3">x</div>
                        <div class="col-3">x</div>
                        <div class="col-3 cheklist">✓</div>
                    </div>

                    <div class="row service-quality">
                        <div class="col-3">Watch on TV,  Laptop, Mobile</div>
                        <div class="col-3">x</div>
                        <div class="col-3 cheklist">✓</div>
                        <div class="col-3 cheklist">✓</div>
                    </div>
                    <div class="row service-quality">
                        <div class="col-3">Unlimited movies and tv show</div>
                        <div class="col-3">x</div>
                        <div class="col-3">x</div>
                        <div class="col-3 cheklist">✓</div>
                    </div>
                </div>
                <div class="submit-button row">
                    <button><Link to='/pembayaran'>Selanjutnya</Link></button>
                </div>
            </div>
        )

    }
}

export default UpgradePremium;