import React , { Component }  from "react";

export default class Todo extends Component {    
    state = {
        title: ''
    }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});
    
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({title: ""})
        this.props.editTodo(this.state.title)
    }
    
    
    render() {
        return (
            <div>
               <input type='checkbox' onChange={() => this.props.markCompleted(this.props.id)}/>
               { this.props.toEdit ? 
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='title' placeholder={this.props.title} onChange={this.onChange} value={this.state.title}/>
                    <input type='submit' value='Save Edit' className="submit-btn" />
                </form>           
                 : <p>{this.props.todo}</p>}
               { this.props.toEdit === false && <button onClick={() => this.props.editTodo(this.props.id)}>Edit</button>}
               <button onClick={() => this.props.deleteTodo(this.props.id)}>Delete</button>
               <hr/>
            </div>
        )
    }
}