import { selector } from "recoil";
import { todoState } from "./atom";

export const newTodo = selector({
    key: 'new',
    get: ({ get }) => {
        const todos = get(todoState)
        return todos.filter(todo => (todo['status'] === 'new'))
    }
})

export const inprogressTodo = selector({
    key: 'inprogress',
    get: ({ get }) => {
        const todos = get(todoState)
        return todos.filter(todo => (todo['status'] === 'in progress'))
    }
})

export const finishTodo = selector({
    key: 'finish',
    get: ({ get }) => {
        const todos = get(todoState)
        return todos.filter(todo => (todo['status'] === 'finish'))
    }
})