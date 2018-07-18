import React, { Component } from 'react';
import {connect} from 'react-redux';

class Navbar extends Component {
    addNew = (event) =>{
        event.preventDefault();
        this.props.changEditStatus();
        this.props.changAddStatus();
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <a className="navbar-brand" href="">NoteRR</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav  mt-2 mt-lg-0">
                        <li className="nav-item active ">
                        <a className="nav-link" href="">Home</a>
                        </li>
                        <li className="nav-item active ">
                        <a className="nav-link" href="" onClick={(event)=>this.addNew(event)}>New Note</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changEditStatus: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        },
        changAddStatus: () => {
            dispatch({type:'CHANGE_ADD_STATUS'})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
//export default Navbar;