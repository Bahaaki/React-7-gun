import React, { useState } from 'react';

function App(props) {
  const [tasks, setTasks] = useState([]);
  const [showDeleted, setShowDeleted] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  function handleDone(id) {
    const newTasks = tasks.map((item, index) => {
      if (index === id) {
        return { ...item, isDone: !item.isDone };
      }
      return item;
    });
    setTasks(newTasks);
  }

  function handleDelete(id) {
    const newTasks = tasks.filter((item, index) => index !== id);
    setTasks(newTasks);
  }

  function handleTaskClick(index) {
    console.log(index);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const taskInput = event.target.task.value;
    if (taskInput.trim() !== '') {
      const newTask = { name: taskInput, isDone: false };
      setTasks([...tasks, newTask]);
      event.target.reset();
    }
  }

  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <>
      <h1>App Neden JavaScript</h1>
      <form onSubmit={handleSubmit}>
        <input className="form-control" type="text" name="task" id="task" />
        <button className="btn btn-warning" type="button" onClick={() => event.target.form.reset()}>
          Sıfırla
        </button>
        <button className="btn btn-success" type="submit">
          Submit
        </button>
      </form>

      {/* Filter buttons */}
      <div>
        <button onClick={() => setShowDeleted(false)}>Show All</button>
        <button onClick={() => setShowDeleted(true)}>Show Completed</button>
      </div>

      {/* Task search input */}
      <input
        type="text"
        placeholder="Search tasks"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      {/* Display tasks based on filters */}
      {tasks.length > 0 && <h2>Görevler</h2>}
      <ul>
        {tasks
          .filter((item) => (showDeleted ? item.isDone : true))
          .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map((item, index) => (
            <li key={index} onClick={() => handleTaskClick(index)}>
              <span
                style={{ textDecoration: item.isDone ? 'line-through' : 'none', marginRight: '8px' }}
                onClick={() => handleDone(index)}
              >
                {item.name}
              </span>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
