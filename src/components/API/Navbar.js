import React from 'react';
import Homepage from './Homepage'
import App from '../../App'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">FE-18 Movie</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/movie">Movie List</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Pembayaran</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/upgrade-premium">Upgrade</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <Router>
                    <Switch>
                        <Route path="/movie">
                            <App />
                        </Route>

                        <Route path="/">
                            <Homepage />
                        </Route>
                    </Switch>
                </Router>
            </div>

        );
    }
}

export default Navbar;