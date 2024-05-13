 import React, {  useEffect, useState } from "react"
 import { Task } from "../../Reducers/Type"
 export interface valueProp{
     onAdd:(value:string)=>void,
     onChange:Task|null
 }

 function InputValue({onAdd,onChange}:valueProp){                                      
     const [value,setValue]=useState<string>("")
     useEffect(()=>{
        if(onChange){
            setValue(onChange.title)
        }
     },[onChange])
      const handelSubmit=()=>{
            if(value.length){
             onAdd(value)
             setValue("")
          }}
     return(
         <>
         <div>
             <input type="text" placeholder=" ری اکت "
             value={value}
                 onChange={(e)=>setValue(e.target.value)}
             />
             <span>
             <button
                 onClick={handelSubmit}
             >...بزن بریم</button></span>
         </div>
         </>
     )
 }
 export default InputValue