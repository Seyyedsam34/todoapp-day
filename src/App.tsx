import React, { useReducer, useState} from "react";
import reducer from "./Reducers/Reducer";
import ListShow from "./Components/ListShowComponent/ListShowComponent";
import data from "./data/data";
import { Task } from "./Reducers/Type";
import InputValue from "./Components/InputValueComponent/InputValueComponent";
function App(){
  const [tasks,dispatch]=useReducer(reducer,data)
  const[update,setUpdate]=useState<Task| null>(null)
  function onAdd(value: string) {
    if(update){
      dispatch({type:"EDITE_Task",id:update.id,title:value})
      setUpdate(null)
    }else{
      dispatch({type:"ADD_Task",title:value,id:1})
    }
    
  }
  function onDelete(taskId:number){
    dispatch({type:"DELETE_Task",id:taskId})
  } 
  function onCheckBox(taskId:number){
    dispatch({type:"CHECKBOX_Task",id:taskId})
  }   
  function onAllCheck(checked:boolean){
    console.log(checked)
  }
  function onEdite(task:Task){
    setUpdate(task)
  }

  return(
  <>
 
  <InputValue onAdd={onAdd} onChange={update} onAllCheck={iaValue}/>
  <ListShow onCheckBox={onCheckBox} 
    onEdite={onEdite}
    taskShow={tasks} 
    onDelete={onDelete} 
  />
  </>
)}
export default App


