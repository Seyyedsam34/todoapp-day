import React from "react"
import { Task } from "../../Reducers/Type"

export interface ListShowProp{
    taskShow:Task[],
    onDelete:(taskId:number)=>void
    onCheckBox:(itemId:number)=>void
    onEdite:(task:Task)=>void
}


function ListShow({taskShow,onDelete,onCheckBox,onEdite}:ListShowProp){
    const handelDelete=(taskId:number)=>{
        onDelete(taskId)
    }

    const handelcheckBox=(itemId:number)=>{
        onCheckBox(itemId)
    }
    const handelEdit=(task:Task)=>{
        onEdite(task)
    }
    return(
        <>
            <ul >
                {taskShow.map((item)=>(
                    <div key={item.id}>
                        <input  type="checkbox" 
                checked={item.done} 
                onChange={()=>{handelcheckBox(item.id)}}
                />
                <li key={item.id}>{item.title}</li>
                <button  onClick={()=>handelDelete(item.id)}
                >انجام دادم
                </button>
                <button 
                onClick={()=>handelEdit(item)}
                >
                ویرایش</button>
                </div>
                ))}
            </ul>
            </>
    )
}
export default ListShow


