import React, {ChangeEvent, useState} from "react";
import {ToDoEntity} from "../model/ToDo"
import ToDoComponent from "./ToDoComponent";
import AddToDo from "./AddToDo";
import SearchToDo from "./SearchToDo";

type ToDoRepositoryProps = {
    toDoList: ToDoEntity[]
}

export default function ToDoRepo(props: ToDoRepositoryProps){

    const toDoList = props.toDoList.map((item, index) => {
        return <ToDoComponent toDoEntity={item} key={index}/>
    })





    return(
        <div className={"List"}>
{/*            <table>
                <tr>
                    <th>Aufgabe</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>{}</td>
                </tr>
                <tr>
                    <td>{}</td>
                </tr>

            </table>*/}
            {toDoList}

        </div>

    )

}