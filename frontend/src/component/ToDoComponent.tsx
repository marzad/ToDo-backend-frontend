import React from "react";
import {ToDoEntity} from "../model/ToDo";

type ToDoEntityProps ={
    toDoEntity: ToDoEntity
}

export default function ToDoComponent(props: ToDoEntityProps){



    return(
        <div>
            <div>
                <label>
                    {props.toDoEntity.description}
                </label>
            </div>
            <div>
                <label>
                    {props.toDoEntity.status}
                </label>
            </div>
        </div>
    )
}