 import React, {  useEffect, useState } from "react"
 import { Task } from "../../Reducers/Type"
 export interface valueProp{
     onAdd:(value:string)=>void,
     onChange:Task|null,
     onAllCheck:(value:boolean)=>void
 }

 function InputValue({onAdd,onChange,onAllCheck}:valueProp){                                      
     const [value,setValue]=useState<string>("")
     const[isValue,setIsValue]=useState<boolean>(false)
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
          const handelAllcheck=()=>{
            setIsValue(!isValue)
            onAllCheck(isValue)
          }
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
         <hr />
         <label>
            <input type="checkbox" checked={isValue} onChange={handelAllcheck}/>
            همه رو انجام دادم 
         </label>
         </>
     )
 }
 export default InputValue