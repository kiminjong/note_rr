import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="">Note RRedux</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav  mt-2 mt-lg-0">
                        <li className="nav-item active ">
                        <a className="nav-link" href="">Home</a>
                        </li>
                        <li className="nav-item active ">
                        <a className="nav-link" href="">Note</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;