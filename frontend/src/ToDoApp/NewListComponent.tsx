import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { newListState, inprogressListState } from '../Recoil/listTodoState';
import { Container, Stack, Button } from "@mui/material";
import { todoState } from "../Recoil/atom";
import { newTodo } from "../Recoil/selector";
import { getTodos, updateTodo, deleteTodo } from "../Recoil/toDoController";
export const NewListComponent = () => {
    const setTodo = useSetRecoilState(todoState);
    const getNewTodo = useRecoilValue(newTodo);
    const getListTodo = () => {
        getTodos().then((res) => setTodo(res))
    }
    const changeStatus = (props: any) => {
        // console.log('props: ' + JSON.stringify(props))
        updateTodo({ id: props._id, data: { name: props.name, status: 'in progress' } }).then(() => { getListTodo() })

    }
    const handleDelete = (id: number) => {
        deleteTodo(id).then(() => {
            getListTodo();
        })
    }
    const newList = getNewTodo;
    // console.log('todo: ' + JSON.stringify(newList))
    return (
        <Container>
            <h3>New list</h3>
            <React.Suspense fallback={<div>Loading...</div>}>

                <Stack direction="column" spacing={2}>
                    {newList.map((list: any) => (
                        <div key={list._id}>
                            {list.name}

                            <Button variant="outlined" sx={{ height: 30, float: "right", marginRight: "5px" }} onClick={() => handleDelete(list._id)}>Delete</Button>
                            <Button variant="outlined" sx={{ height: 30, float: "right", marginRight: "5px" }} onClick={() => {
                                changeStatus(list)
                            }}>{list.status}</Button>
                        </div>
                    ))}
                </Stack>
            </React.Suspense>
        </Container>
    )
}