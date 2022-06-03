import React , { Component }  from "react";

export default class Todo extends Component {
    render() {
        return (
            <div>
                <input type='checkbox'/>
               <p>Ayo</p> 
               <button>Edit</button>
               <button>Delete</button>
               <hr/>
            </div>
        )
    }
}