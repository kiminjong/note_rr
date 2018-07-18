import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle:'',
            noteContent:''
        }
    }
    
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }
    addData =(title,content) => {
        var item= {};
        item.noteTitle = title;
        item.noteContent= content;
        //gui du lieu len tren app su ly
        this.props.getData(item);
        
    }
    render() {
        return (
            <div className="col-4">
                <div className="card border-primary">
                    <div className="card-body">
                        <h4 className="card-title">Sua Ghi Chu</h4>
                        <form>
                            <div className="form-group">
                            <input type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpId" placeholder="Tieu De Note" />
                            </div>
                            <div className="form-group">
                            <textarea type="text" onChange={(event)=>this.isChange(event)} className="form-control" name="noteContent" id="noteContent" aria-describedby="helpId" placeholder="Noi Dung Note" defaultValue={""} rows="8"/>
                            </div>
                            <button type="reset" onClick={()=>this.addData(this.state.noteTitle,this.state.noteContent)} className="btn btn-block btn-warning">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NoteForm;