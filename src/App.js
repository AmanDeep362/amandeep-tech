import React from "react";
import useCronJob from "usecronjob"
import "./App.scss";
import Main from "./containers/Main";
function App() {
  const task = () => {
    // Perform your task here
    console.log('Task executed!');
  };

  // Run the task every day at 12:00 PM
  useCronJob(task, ['daily', null, '11:09']);

  return (
    <div>
      <Main />
    </div>
  );
}

export default App;
