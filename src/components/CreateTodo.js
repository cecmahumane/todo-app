import React, {Component} from 'react'

export class CreateTodo extends Component {
    state = {
        title: ''
    }
    
    onChange = (e) => this.setState({ [e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title: ""})
    }

    render() {
       return (
           <form onSubmit={this.onSubmit}>
               <input type='text' name='title' placeholder='Add Todo' onChange={this.onChange} value={this.state.title}/>
               <input type='submit' value='submit' className="submit-btn" />
           </form>
       )
   }
}