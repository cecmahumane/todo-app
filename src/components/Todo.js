import React , { Component }  from "react";

export default class Todo extends Component {    
    render() {
        return (
            <div>
                <input type='checkbox' onChange={this.props.markCompleted}/>
               <p>Hello World</p> 
               <button onClick={this.props.editTodo} >Edit</button>
               <button onClick={this.props.deleteTodo}>Delete</button>
               <hr/>
            </div>
        )
    }
}