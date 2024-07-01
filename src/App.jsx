
import Button from './components/Button.jsx';
import Task from './components/Task.jsx';
import Input from './components/Input.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, toggleTaskStatus, removeTodo, updateTodo, filterTodo, searchTodo } from './redux/actions.js';




export default function App() {
  const tasks = useSelector(state => state.todos)
  const filterBy = useSelector(state => state.filter)
  const searchBy = useSelector(state => state.searchText)
  const dispatch = useDispatch();

  // debugger
  const filteredTasks = tasks
    .filter((task) => {
      if (filterBy === "completed") return task.completed;
      else if (filterBy === "pending") return !task.completed;
      else return true; // If filterBy is "all" or any other value, include all tasks
    })
    .filter((taskleft) => {
      if (searchBy) return taskleft.text.toLowerCase().includes(searchBy.toLowerCase());
      else return true; // If searchBy is empty, include all tasks
    });

  const [inputValue, setInputValue] = useState('');


  // to add a new task 
  const handleAddTask = () => {
    const newTask = inputValue;
    if(newTask){
      dispatch(addTodo(newTask));
      setInputValue('');
    }
  }

  // to make unmark the completed task 
  const handleToggleComplete = (id) => {
    dispatch(toggleTaskStatus(id))
  }


  // to delete the task 
  const handleDeleteTask = (id) => {
    dispatch(removeTodo(id))
  }

  // to edit a task 
  const handleEditTask = (id, editedTask) => {
    dispatch(updateTodo(id, editedTask));
  }





  // console.log(tasks,searchBy,filterBy)

  return (
    <div className="container w-4/5 mt-20 mx-auto">
      <div className="searchSection sm:flex justify-center gap-5 mb-5">
        <Input type="text" value={inputValue} placeholder="Write to add task..." onChange={(e) => setInputValue(e.target.value)} />
        <Button onClick={() => handleAddTask()}>Add task</Button>
      </div>

      <hr />

      <div className="tasksDiv mt-5 sm:w-5/6 m-auto">
        <h1 className='text-3xl font-semibold rounded-md text-center p-4 my-3'>Tasks list</h1>

        <div className="taskSection p-3 shadow-gray-400 shadow-lg rounded-md">
          <div className="flex justify-between m-3">
            <select name="" id="filterText" className='p-3 text-lg bg-slate-200 border-0 rounded-md' onChange={(e) => dispatch(filterTodo(e.target.value))} defaultValue="All">
              <option value="All" >All</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>

            <Input type="text" placeholder="Search..." onChange={(e) => dispatch(searchTodo(e.target.value))}></Input>
          </div>

          {filteredTasks.length > 0 ? (filteredTasks.sort((a, b) => b.id - a.id ).map((task) => {
            return <Task key={task.id} task={task} onToggleComplete={handleToggleComplete} onDeleteTask={handleDeleteTask} onEditTask={handleEditTask} />

          })) : (<h4 className='text-center text-3xl my-6'>No task is pending!</h4>)
          }
        </div>
      </div>
    </div>

  )
}