import React, {ChangeEvent, useState} from "react";
import {ToDoEntity} from "../model/ToDo"
import ToDoRepo from "./ToDoRepo";
import ToDoComponent from "./ToDoComponent";

type SearchToDoRepositoryProps = {
    toDoList: ToDoEntity[]
    searchToDo(id: number[]): void
}

export default function SearchToDo(props: SearchToDoRepositoryProps){

    const [searchTask, setSearchTask] = useState("")

    function inputTask(event: ChangeEvent<HTMLInputElement>){
        setSearchTask(event.target.value)
    }


    function indexOfSearchedTask(){
        return (props.toDoList.filter((item) => {
            return item.description.toLowerCase().includes(searchTask.toLowerCase())
        })).map((item) => {
            return props.toDoList.indexOf(item)
        })
    }


    function searchToDoFunction(id: number[]){
        id.map((index) => {
            let a = props.toDoList.filter((item) => {
                return item.id === index
            })
            return <ToDoRepo toDoList ={a}/>
        })

    }

    function onClickFunction(){

            let ids = indexOfSearchedTask()
            searchToDoFunction(ids)

    }


    return(

        <div>
            <div>
                <input onChange ={inputTask}/>
                <button onClick={onClickFunction}>Suchen</button>
            </div>
        </div>

    )

}