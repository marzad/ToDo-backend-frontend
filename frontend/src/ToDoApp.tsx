import React, {useEffect, useState} from "react";
import {ToDoEntity} from "./model/ToDo";
import axios from "axios";
import AddToDo from "./component/AddToDo";
import SearchToDo from "./component/SearchToDo";
import ToDoRepo from "./component/ToDoRepo";


export default function ToDoApp(){

    const [tasks, setTasks] = useState<ToDoEntity[]>([])

    useEffect(() => {
        getToDoList()
    },[])

    function getToDoList(){
        axios.get("/api/todo").then((response) => {
            setTasks(response.data)
        })
    }


    function addTask(){
        axios.put("/api/todo", toAddTask).then((response) => {
            setTasks(response.data)
        })
    }

    function searchTask(){
        axios.get("/api/todo/{task}", {params: toSearchTask}).then((response) => {
            setTasks(response.data)
        })

    }

    const [toAddTask, setToAddTask] = useState("")

    function addAgentFunction(description: string){
        setToAddTask(description)
    }

    const [toSearchTask, setToSearchTask] = useState("")

    function searchAgentFunction(task: string){
        setToSearchTask(task)
    }


    return(
        <>
            <div>
                <ToDoRepo toDoList={tasks}/>
            </div>
            <div>
                <AddToDo toDoList={tasks} addToDo={addAgentFunction}/>
            </div>
            <div>
                <SearchToDo toDoList={tasks} searchToDo={searchAgentFunction}/>
            </div>
        </>

    )

}
