import React , { Component }  from "react";

export default class Todo extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        this.props.editTodo(this.props.id, this.state.title)
        this.setState({title: ""})
    }
    
    
    render() {
        // console.log(this.state)
        return (
            <div className="whole-todo-element">
               <div className="todo-element">
                <input className="checkbox-btn" type='checkbox' onChange={() => this.props.markCompleted(this.props.id)}/>
                { this.props.toEdit ? 
                    <form onSubmit={this.onSubmit}>
                        <input type='text' name='title' placeholder={this.props.title} onChange={this.onChange} value={this.state.title}/>
                        <input type='submit' value='Save Edit' className="submit-btn" />
                    </form>           
                    : <p>{this.props.todo}</p>}
                { this.props.toEdit === false && <button className="edit-btn" onClick={() => this.props.editTodo(this.props.id, this.state.title)}>Edit</button>}
                <button className="delete-btn" onClick={() => this.props.deleteTodo(this.props.id)}>Delete</button>
               </div> 
               <hr className="divider"/>
            </div>
        )
    }
}