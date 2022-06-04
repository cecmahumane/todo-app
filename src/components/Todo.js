import React , { Component }  from "react";

export default class Todo extends Component {    
    render() {
        return (
            <div>
               <input type='checkbox' onChange={() => this.props.markCompleted(this.props.id)}/>
               <p>{this.props.todo}</p> 
               <button onClick={this.props.editTodo} >Edit</button>
               <button onClick={() => this.props.deleteTodo(this.props.id)}>Delete</button>
               <hr/>
            </div>
        )
    }
}