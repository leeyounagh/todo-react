
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Top from './component/Top'

import PageNation from './component/PageNation'
import Control from './component/control'
import { FcFullTrash } from 'react-icons/fc';
 import UserInput from './component/userInput'




export default class App extends Component {
 

  constructor(props){
    
    super(props);
    
    this.state= {
   
    toDoItems:[
      { action:'buy Milk', done:false ,id:this.randomIDGenerator()},
      {action: '치과가기', done:false, id:this.randomIDGenerator()},
      {action: '아르세우스하기', done:false,id:this.randomIDGenerator()},
      
     ],
     newToDo:'',
   
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

  // handleRemove =(index) =>{

  // }
  deleteItem = (index,_id)=>{
      if(index ==='delete'){
        if(window.confirm('Really?')){
          let Item = Array.from(this.state.toDoItems)
          console.log("복제id",Item[0].id)
          let i =0;
          while(i<Item.length){
            if(Item[i].id===_id){
              Item.splice(i,1);
            
              console.log("길이",this.state.toDoItems)
             break;
            }
            i=i+1
          }
         this.setState(
           {
             toDoItems:Item
           }
         )
         
        }
        
      }
      
     
  }
         
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
                <td><input type="button" value="delete" name={item.id}
                   onClick={function(e){
                    e.preventDefault();
                  this.deleteItem('delete',e.target.name)
                 console.log("값",e.target.name)
                 
                }.bind(this)
                  }></input></td> 
                
          </tr>
          
        
        )
              
       
 randomIDGenerator() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
}
  
 
   render(){
    console.log("아이디값",this.state.toDoItems)
    
    return(
      <div className="App container">
     
      <Top></Top>
      오늘의 할일은?
      <UserInput  NewToDo={function(){
         this.setState(
          {
           toDoItems:[
             ...this.state.toDoItems,
             {action:this.state.newToDo,done:false, id:this.randomIDGenerator()},
            
           ]
           
          }
     
       )
       console.log("아이디값",this.state.toDoItems.id)
      }.bind(this)}  updateValue={function(e){
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





