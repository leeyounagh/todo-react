import React, { Component } from 'react'

export default class UserInput extends Component {
  render() {
    return (
      <div className="input-style col-12">
  
             
      <input placeholder="할일을 입력하시오"
      className="text-input" 
       value={this.props.newToDo} 
        onChange={this.props.updateValue}></input>
      <button className='btn btn-primary button-margin button-color'
        onClick={function(e){
         this.props.NewToDo()

        }.bind(this)}
        >Add</button>
    
  </div>
    )
  }
}
