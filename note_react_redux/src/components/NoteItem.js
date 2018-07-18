import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteItem extends Component {
    twoActionButton = () => {
        //hien thi trang thai
        this.props.changEditStatus();
        //hien thi noi dung
        this.props.getEditData(this.props.note);

    }
    deleteData = () =>{
        this.props.getDeleteData(this.props.note.id);
    }
    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="section1HeaderId">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#number"+ this.props.number} aria-expanded="true" aria-controls="section1ContentId">
                        {this.props.noteTitle}
                        </a>
                        <div className="btn-group float-right">
                            <button className="btn btn-warning" onClick={()=>this.twoActionButton()}> Edit </button>
                            <button className="btn btn-danger" onClick={()=>this.deleteData()}> Remove </button>
                        </div>
                    </h5>
                </div>
                <div id={"number"+ this.props.number} className="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.isEdit //co the xoa khong anh huong
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changEditStatus: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        },
        getEditData: (editObject) => {
            dispatch({type:'GET_EDIT_DATA', editObject})
        },
        changEditStatus: () => {
            dispatch({type:'CHANGE_EDIT_STATUS'})
        },
        getDeleteData: (deleteId) => {
            dispatch({type:'DELETE_DATA', deleteId})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)
//export default NoteItem;