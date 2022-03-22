
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Top from './component/Top'

import PageNation from './component/PageNation'
import Control from './component/control'
import { FcFullTrash } from 'react-icons/fc';
 import UserInput from './component/userInput'
//  import ToDoList from './component/ToDoList';



export default class App extends Component {
 
  
  constructor(props){
    
    super(props);
    
    this.state= {
   
    toDoItems:[
      { action:'buy Milk', done:false ,id:1},
      {action: '치과가기', done:false, id:2},
      {action: '아르세우스하기', done:false,id:3},
      
     ],
     newToDo:'',
     doingState:[]
  }
  }
  // navState =()=>{
  //   if(this.state.navState==='')
  // }
  
  toggleDone = (todo) =>
          this.setState(
            {
              toDoItems:this.state.toDoItems.map((item)=>
              item.action === todo.action ? {...item,done:!item.done} : item
 )             
            }
          )
         
  todoRow = () =>
        this.state.toDoItems.map((item)=>
          <tr key ={item.action}>
                 <td>{item.action}</td>
               <td> <input
                type="checkbox"
                checked={item.done}
                 onChange={()=>
                  this.toggleDone(item)}>
                </input> </td>
                <td><FcFullTrash onClick={function(e){
                  let copiedTodo =Array.from(this.state.toDoItems)
                }.bind(this)}></FcFullTrash></td>
                
          </tr>
          
        
        )
       
      
 
   render(){
    
    
    return(
      <div className="App container">

      <Top></Top>
      오늘의 할일은?
      <UserInput  NewToDo={function(){
         this.setState(
          {
           toDoItems:[
             ...this.state.toDoItems,
             {action:this.state.newToDo,done:false}
           ]
           
          }
     
       )
       
      }.bind(this)} updateValue={function(e){
        this.setState(
          {
              newToDo:e.target.value
          }
      )
      }.bind(this)}></UserInput>
   
      <div  className="nav-style col-12"> 
      
      <Control title="All"></Control>
      
      </div>
    
      <div className="main-style col-12"> 
       <table className='table text-white'>
                  <thead>
                    <tr>
                      <th>Task</th>
                      <th>Completed</th>
                      
                    </tr>
                  </thead>
                      <tbody>{this.todoRow()}</tbody>
                </table>
      
      </div> 
    
  
      <PageNation></PageNation>
      </div>
    )
     
  }
}





