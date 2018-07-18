import {noteData} from './FirebaseConnect';

var redux = require('redux');


const noteInitialState = {
    isEdit:false,
    editItem:{},
    isAdd:false
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case 'ADD_DATA':
        //console.log("ket noi thanh cong voi addData");
            noteData.push(action.getItem);
            return state
        case 'CHANGE_EDIT_STATUS':
            return {...state, isEdit:!state.isEdit} 
        case 'CHANGE_ADD_STATUS':
            return {...state, isAdd:!state.isAdd} 
        case 'GET_EDIT_DATA':
            return {...state, editItem:action.editObject}//editObject day no vao editItem
        
        case 'EDIT':
        //update du lieu len tren database
            noteData.child(action.getItem.id).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
            return {...state, editItem:{}} 

        case 'DELETE_DATA':
            noteData.child(action.deleteId).remove()
            return state
        
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
export default store;