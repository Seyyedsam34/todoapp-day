import { Task,typeAction } from "./Type";

function reducer(tasks:Task[],action:typeAction){

    switch(action.type){
        case "ADD_Task":{
            return[
                ...tasks,
                {
                    id:Math.floor(Math.random()*1000),
                    title:action.title,
                    date:new Date().toLocaleDateString('fa-IR'),
                    dateUpdate:" ",
                    done:false
                }
            ]
        }
        case"DELETE_Task":{
           return  tasks.filter((item)=>item.id!==action.id)
        }
        case "CHECKBOX_Task":{
            return tasks.map((item) => {
                if (item.id === action.id) {
                  return {
                    ...item,
                    done: !item.done,
                  };
                } else {
                  return item;
                  }}
            )
        }
        case "EDITE_Task":{
            return tasks.map((item)=>{
                if(item.id===action.id){
                    return{
                        ...item,
                        title:action.title
                    }
                }else{
                    return item
                }
            })
        }
        default:
            return tasks
    }

}
export default reducer