import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import {connect} from 'react-redux';

class App extends Component {
  showForm = () =>{
    if(this.props.isEdit){
      return <NoteForm/>
    }
  }
  render() {
    return (
      <div >
        <Navbar/>
        <div className="container mt-5">
          <div className="row">
            <NoteList/>
            {this.showForm()}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     changEditStatus: () => {
//       dispatch({type:'CHANGE_EDIT_STATUS'})
//     }
//   }
// }
// co the them vao cho giong temp
export default connect(mapStateToProps)(App)
//export default App;
