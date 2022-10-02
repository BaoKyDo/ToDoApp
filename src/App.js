import React from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Task/Tasks";

function App() {
  
  const tasks = [

    {
      id: 1,
      task: 'cleaning'
    },

    {
      id:2,
      task: "laundry"
    },

    {
      id:3,
      task: "cooking"
    },

    {
      id:4,
      task: "journalling"
    },

    {
      id:5,
      task: "email to a coworker"
    },

  ];
  
  
  return (
    <div>

      <NewTask/>

      <Tasks items={tasks}/>
      
    </div>
  );

}

export default App;
