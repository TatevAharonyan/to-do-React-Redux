import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from "./../const/index";

export const checkTodo = (id) => {
    return {
        type: CHECK_TODO,
        payload: id,
    }
}

export const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        payload: id,
    }

}

export const addTodo = text => {
    return {
        type: ADD_TODO,
        payload: text
    }
}