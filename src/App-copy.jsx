import React, { useState } from 'react';

function App(props) {
    const [tasks, setTasks] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        const taskInput = event.target.elements.task.value;
        setTasks([...tasks, taskInput]);
        event.target.reset();
    }

    function handleTaskClick(index) {
        console.log(index);
    }

    return (
        <>
            <h1>App Neden javaScript</h1>
            <form onSubmit={handleSubmit}>
                <input className="form-control" type="text" name="task" id="task" />
                <button className="btn btn-warning" type="button" onClick={() => event.target.form.reset()}>
                    Sıfırla
                </button>
                <button className="btn btn-success" type="submit">
                    Submit
                </button>
            </form>
            {tasks.length > 0 && <h2>Görevler</h2>}
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} onClick={() => handleTaskClick(index)}>
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}

export default App;
