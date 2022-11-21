import { initialState } from "./initialState"
import { ADDED, TOGGLED, COLORSELECTED, DELETED, ALLCOMPLITED, CLEARCOMPLETED } from "./actionType"

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo._id, maxId), -1);
    return maxId + 1
}

const reducers = (state = initialState, action) => {
    switch (action.type) {

        case ADDED:
            return [
                ...state,
                {
                    _id: nextTodoId(state)
                }
            ]
        case TOGGLED:
            return state.map((todo) => {
                if (todo._id !== action.payload) {
                    return todo
                }

                return {
                    ...todo,
                    completed: !todo.completed
                }
            })
        case COLORSELECTED:
            const { todoId, color } = action.payload;

            return state.map(todo => {
                if (todo._id !== todoId) {
                    return todo
                }
                return {
                    ...todo,
                    color: color
                }
            })
        case DELETED:
            return state.filter(todo => todo._id !== action.payload)
        case ALLCOMPLITED:
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case CLEARCOMPLETED:
            return state.filter(todo => !todo.completed)

        default: break;
    }



}

export default reducers
