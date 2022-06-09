import React , { Component }  from "react";

export default class Todo extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
        this.onClickEditHandler = this.onClickEditHandler.bind(this)
    }
    
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '') {
            console.log(this.props.todo)
            this.setState({title: this.props.todo})
            console.log(this.state.title)
            this.props.editTodo(this.props.id, this.props.todo)
            
        } else {
        this.props.editTodo(this.props.id, this.state.title)
        }
    }
    
    onClickEditHandler = () => {
        this.props.editTodo(this.props.id, this.props.todo)
        this.setState({title: ''})
    }

    render() {
        // console.log(this.state)
        return (
            <div className="whole-todo-element">
               <div className="todo-element">
                <input className="checkbox-btn" type='checkbox' onChange={() => this.props.markCompleted(this.props.id)}/>
                { this.props.toEdit ? 
                    <form className="edit-input" onSubmit={this.onSubmit}>
                        <input type='text' name='title' placeholder={this.props.todo} onChange={this.onChange} value={this.state.title}/>
                        <input type='submit' value='Save Edit' className="save-edit-btn" />
                    </form>           
                    : <p className="todo">{this.props.todo}</p>}
                { this.props.toEdit === false && <button className="edit-btn" onClick={() => this.onClickEditHandler()}>Edit</button>}
                <button className="delete-btn" onClick={() => this.props.deleteTodo(this.props.id)}>Delete</button>
               </div> 
               <hr className="divider"/>
            </div>
        )
    }
}