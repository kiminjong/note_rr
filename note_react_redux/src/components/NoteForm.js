import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle:'',
            noteContent:'',
            id:''
        }
    }
    
    componentWillMount() {
        if(this.props.editItem){ //edit case
            this.setState({
                noteTitle:this.props.editItem.noteTitle,
                noteContent:this.props.editItem.noteContent,
                id:this.props.editItem.id
            });
        }
    }
    
    isChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    addData =(title,content)=>{
        if(this.state.id){
            var editObject={};
            editObject.id = this.state.id;
            editObject.noteTitle = this.state.noteTitle;
            editObject.noteContent = this.state.noteContent;
            this.props.editDataStore(editObject);
            this.props.changeEditStatus(); // tat form
            
        }else{
            var item ={};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataStore(item);
        }
       
    }
    printTitle = () => {
        if(this.props.addStatus){
            return <h4 className="card-title">Them Ghi Chu</h4>;
        }else{
            return <h4 className="card-title">Sua Ghi Chu</h4>;
        }
    }
    render() {
        return (
            <div className="col-4">
                <div className="card border-primary">
                    <div className="card-body">
                        {this.printTitle()}
                        <form>
                            <div className="form-group">
                            <input type="text" defaultValue={this.props.editItem.noteTitle} onChange={(event)=>this.isChange(event)} className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tieu De Note" />
                            </div>
                            <div className="form-group">
                            <textarea type="text" defaultValue={this.props.editItem.noteContent} onChange={(event)=>this.isChange(event)} className="form-control" name="noteContent" id="noteContent" aria-describedby="helpId" placeholder="Noi Dung Note" rows="8"/>
                            </div>
                            <button type="reset" onClick={()=>this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-block btn-warning">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        addStatus: state.isAdd
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type:"ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type:"EDIT",getItem})
        },
        changeEditStatus: () => {
            dispatch({type:"CHANGE_EDIT_STATUS"})
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
//export default NoteForm;