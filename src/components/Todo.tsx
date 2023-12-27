import { useState } from "react";
import { block, For } from "million/react";

const TodoList = () => {
  const [tasks, setTasks] = useState<Object[]>([]);
  const [taskInput, setTaskInput] = useState<string>("");
  const [taskIdCounter, setTaskIdCounter] = useState<number>(0);

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([
      ...tasks,
      { id: taskIdCounter, text: taskInput, completed: false },
    ]);
    setTaskInput("");
    setTaskIdCounter(taskIdCounter + 1);
  };

  return (
    <div className="mt-10">
      <h1>Todo List</h1>
      {/* <form> */}
      <input
        type="text"
        placeholder="Add a task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      {/* </form> */}
      <List tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

//* <For /> for iterating over the list & block() for optimizing
const List = block(({ tasks, setTasks }: { tasks: any[]; setTasks: any }) => {
  const toggleTaskCompletion = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const removeTask = (index: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== index);
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  return (
    <ul>
      <For each={tasks}>
        {(task) => (
          <li key={task.id}>
            <span>{task.text}</span>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        )}
      </For>
    </ul>
  );
});

export default TodoList;
