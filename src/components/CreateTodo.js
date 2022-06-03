import React, {Component} from 'react'

export class CreateTodo extends Component {
   render() {
       return (
           <form>
               <input type='text' name='title' placeholder='Add Todo'/>
               <input type='submit' value='submit' className="submit-btn" />
           </form>
       )
   }
}