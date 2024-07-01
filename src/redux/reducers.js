
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, Filter_TODO, SEARCH_TODO, TOGGLE_TASK_STATUS } from "./actionTypes";

const initialState = {
	todos: [],
	filter: "All",
	searchText: ""
}
const todoReducer = (state=initialState, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				todos: [...state.todos, { id: +new Date(), text: action.payload.task, completed: false }],
				filter: state.filter,
				searchText: state.searchText
			}

		case REMOVE_TODO:
			return {
				todos: state.todos.filter((todo) => { return todo.id != action.payload.taskId }),
				filter: state.filter,
				searchText: state.searchText
			}

		case TOGGLE_TASK_STATUS:
			// debugger
			return {
				...state,
				todos: state.todos.map((todo) => {return todo.id === action.payload.taskId ? { ...todo, completed: !todo.completed } : todo })
				
			}

		case UPDATE_TODO:
			return {
				todos: state.todos.map((todo) => {return todo.id === action.payload.taskId ? { ...todo, text: action.payload.task } : todo }),
				filter: state.filter,
				searchText: state.searchText
			}

		case Filter_TODO:
			  return {
				...state,
				filter: action.payload.filterBy
			  };

		case SEARCH_TODO:
			  return {
				...state,
				searchText: action.payload.searchText
			  };

		default:
			return state;

	}

}

export default todoReducer ;