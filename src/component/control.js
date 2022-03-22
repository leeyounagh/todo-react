import React, {Component} from "react"

export default class Control extends Component{
    render(){
         return(         
            <nav>
             <a href ="#" className= "LInk-style" name="Doing">{this.props.title}</a>
            </nav>
          
           
             
         )
    }
  
  }