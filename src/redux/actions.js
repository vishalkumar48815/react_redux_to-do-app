import { ADD_TODO, Filter_TODO, REMOVE_TODO, SEARCH_TODO, TOGGLE_TASK_STATUS, UPDATE_TODO } from "./actionTypes";

export const addTodo = (task) =>({
	type: ADD_TODO,
	payload: {task}
})

export const removeTodo = (taskId) =>({
	type: REMOVE_TODO,
	payload: {taskId}
})


export const toggleTaskStatus = (taskId) =>({
	type: TOGGLE_TASK_STATUS,
	payload: {taskId}
})

export const updateTodo = (taskId, task) =>({
	type: UPDATE_TODO,
	payload: {taskId, task}
})

export const filterTodo = (filterBy) =>({
	type: Filter_TODO,
	payload: {filterBy}
})

export const searchTodo = (searchText) =>({
	type: SEARCH_TODO,
	payload: {searchText}
})