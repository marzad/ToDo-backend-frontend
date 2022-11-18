import React, {useState} from "react";
import {ToDoEntity} from "../model/ToDo"

type AddToDoRepositoryProps = {
    toDoList: ToDoEntity[]
    addToDo(entity: ToDoEntity): void
}

export default function AddToDo(props: AddToDoRepositoryProps){

    const [toDoList, setToDoList] = useState(props.toDoList)

    function addFunction(newToDoEntity: ToDoEntity){
        props.toDoList.push(newToDoEntity)
        setToDoList(props.toDoList)
    }




    return(
        <>
            <div>
                <input onChange={}/>
                <button onClick={}/>
            </div>

        </>

    )

}