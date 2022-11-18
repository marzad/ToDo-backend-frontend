import React, {ChangeEvent, useState} from "react";
import {ToDoEntity} from "../model/ToDo"
import ToDoRepo from "./ToDoRepo";

type AddToDoRepositoryProps = {
    toDoList: ToDoEntity[]
    addToDo(description: string): void
}

export default function AddToDo(props: AddToDoRepositoryProps){

    const [toDoList, setToDoList] = useState(props.toDoList)

    function addFunction(newToDoEntity: ToDoEntity){
        props.toDoList.push(newToDoEntity)
        setToDoList(props.toDoList)
    }

    const [toAddTaskDescription, setToAddTaskDescription] = useState("")

    function inputTask(event: ChangeEvent<HTMLInputElement>){
        setToAddTaskDescription(event.target.value)
    }

    function comulateIndex(){
        let i = props.toDoList.length-1
        let lastIndex = props.toDoList.at(i)
        // @ts-ignore
        return lastIndex.id+1
    }

    function onClickFunction(){
        addFunction({
            id : comulateIndex(),
            description : toAddTaskDescription,
        status : "OPEN"})
        return <ToDoRepo toDoList={toDoList}/>
    }


    return(
        <>
            <div>
                <input onChange={inputTask}/>
                <button onClick={onClickFunction}>Add</button>
            </div>
        </>

    )

}