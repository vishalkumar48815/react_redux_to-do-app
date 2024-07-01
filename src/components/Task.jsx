
import Button from "./Button";
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useRef, useState } from "react";

const Task = ({ Key, task, onToggleComplete, onDeleteTask, onEditTask }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editTask, setEditTask] = useState(task.text);
	const taskEditRef = useRef(null);

	const handleSaveEditedTask = () => {
		setIsEditing(!isEditing);
		if (isEditing) {
			onEditTask(task.id, editTask);
		}
	}

	useEffect(() => {
		if (isEditing) {
			taskEditRef.current?.focus();
		}
	}, [isEditing])

	return (
		<div key={Key} className="taskList flex justify-between gap-3 items-center bg-slate-100 p-3 mt-3 rounded-md">
			{task.completed ? ( <p className={`flex-grow text-2xl ${task.completed ? 'line-through text-gray-500' : ''}`}
				>{task.text}</p> ) : (<input className={isEditing ? "text-2xl p-4 w-full bg-transparent focus:bg-white focus:shadow-md rounded-md outline-none border-none focus:outline-none focus:border-none focus:ring-0" : "text-2xl p-4 w-full bg-transparent rounded-md outline-none border-none focus:outline-none focus:border-none focus:ring-0"} value={editTask} readOnly={!isEditing} onChange={(e) => setEditTask(e.target.value)} ref={taskEditRef} />)}

			<div className="buttons flex gap-3">
				<Button title={isEditing ? "Save task" : "Edit task"} id="editBtn" onClick={() => handleSaveEditedTask()}>{isEditing ? 'Save' : <EditIcon />}</Button>
				<Button id="deleteBtn" title="Remove task" onClick={() => onDeleteTask(task.id)}><DeleteIcon /></Button>
				<Button id="toggleTaskStatusBtn" onClick={() => onToggleComplete(task.id)} title={task.completed ? "Mark incomplete" : "Mark completed"}>{task.completed ? <ClearIcon /> : <DoneIcon />}</Button>
			</div>

		</div>
	)
}

export default Task