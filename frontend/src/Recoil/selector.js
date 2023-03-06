import { selector, RecoilEnv } from "recoil";
import { todoState } from "./atom";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false
export const newTodo = selector({
    key: 'new',
    get: ({ get }) => {
        const todos = get(todoState)
        // console.log('todos' + JSON.stringify(todos))
        return todos.filter(todo => (todo.status === 'new'))
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