import React, { useState } from "react";
import "./Task.css";

const Task = (props) => {
    
    const [doneItem, setDoneItem] = useState(props.done);

    const doneHandler = () => {
        setDoneItem("Done!");
        console.log("done!");
    }


    return (
        <div className="newitem">
            <input className="doneBtn" type="checkbox" name="doneBtn" value="" onClick={doneHandler}></input>
            <h2 className="todoItem">{props.task}</h2>
            <p className="doneItem">{doneItem}</p>
        </div> 
    );
}

export default Task;