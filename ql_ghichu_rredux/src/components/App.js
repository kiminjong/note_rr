import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';
import {noteData} from './FirebaseConnect';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  addData =(item) => {
    noteData.push(item);
  }
  render() {
    // noteData.once('value').then(function(snapshot){
    //   console.log(snapshot.val());
    // });
    
    return (
      <div className="App">
        <Navbar/>
        <div className="container mt-5">
          <div className="row">
            <NoteList/>
            <NoteForm getData ={ (item) => this.addData(item)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
