import React, {useState} from "react";
import {ToDoEntity} from "../model/ToDo"

type SearchToDoRepositoryProps = {
    toDoList: ToDoEntity[]
    searchToDo(entity: ToDoEntity): ToDoEntity
}

export default function SearchToDo(props: SearchToDoRepositoryProps){

    const [filteredToDoList, setFilteredToDoList] = useState(props.toDoList)

    function searchToDoFunction(id: number){
        return props.toDoList.filter((item) =>{
            return item.id === id
            }
        )
    }

    return(
        <>
        </>

    )

}