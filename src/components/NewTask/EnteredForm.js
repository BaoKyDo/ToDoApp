import React, { useState } from "react";
import "./EnteredForm.css";

const EnteredForm = () => {

    const [enteredTask, setEnteredTask] = useState("");

    const changeTaskHandler = (event) => {
        setEnteredTask(event.target.value);
    }

    const submitHandler = (event) => {
        // this is default JavaScript behavior
        //we can prevent the default off this request being sent
        //the page will not reload.
        event.preventDefault();
        
        const itemData = {
            task: enteredTask
        };

        console.log(itemData);

        setEnteredTask('');
    }

    return (
        //this is default browser behavior
        <form onSubmit={submitHandler}>

        <div className="new-task__controls">
            <div className="new-task__control">
                <label>New Task: </label>
            </div>

            <div className="new-task__control">
                <input type="text"
                value={enteredTask} 
                onChange={changeTaskHandler}></input>
            </div>
        </div>

        <div className="new-task__actions">
            <button className="add" type="submit" >Add</button>
        </div>

        </form>
    );

}


export default EnteredForm;