import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddEvent from "./components/AddEvent";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //Delete Event
  const deleteEvent = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id));
  };

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((tasks) =>
        tasks.id === id ? { ...tasks, reminder: !tasks.reminder } : tasks
      )
    );
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddEvent />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteEvent} onToggle={toggleReminder} />
      ) : (
        "No Task to show"
      )}
    </div>
  );
}

export default App;
