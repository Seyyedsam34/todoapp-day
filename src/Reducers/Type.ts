export interface Task{
    id:number,
    title:string,
    date:string,
    dateUpdate:string,
    done:boolean
}


export type typeAction=
|{
    type:"ADD_Task",
    title:string,
    id:number
}|{
    type:"DELETE_Task"|"CHECKBOX_Task",
    id:number
}|{
    type:"EDITE_Task",
    title:string,
    id:number
}
