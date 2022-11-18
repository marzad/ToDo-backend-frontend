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



    return(
        <>
            <div>
                <ToDoRepo toDoList={tasks}/>
            </div>
            <div>
                <AddToDo toDoList={tasks} addToDo={}/>
            </div>
            <div>
                <SearchToDo toDoList={tasks} searchToDo={}/>
            </div>
        </>

    )

}
