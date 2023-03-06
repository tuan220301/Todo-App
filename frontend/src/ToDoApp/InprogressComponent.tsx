import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { finishListState, inprogressListState } from '../Recoil/listTodoState';
import { Button, Container, Stack } from "@mui/material";
import { todoState } from "../Recoil/atom";
import { inprogressTodo } from "../Recoil/selector";
import { getTodos, deleteTodo, updateTodo } from "../Recoil/toDoController";
export const InprogressListComponent = () => {

    const setTodo = useSetRecoilState(todoState);
    const getInProgreeTodo = useRecoilValue(inprogressTodo)
    const getListTodo = () => {
        getTodos().then((res) => setTodo(res))
    }

    const handleDelete = (id: number) => {
        deleteTodo(id).then(() => {
            getListTodo();
        })
    }
    const changeStatus = (props: any) => {
        // console.log('props: ' + JSON.stringify(props))
        updateTodo({ id: props._id, data: { name: props.name, status: 'finish' } }).then(() => { getListTodo() })

    }
    const inprogressList = getInProgreeTodo;
    return (
        <Container>
            <h3>In-progress list</h3>

            <Stack direction="column" spacing={2}>
                {inprogressList.length === 0 ? <h3>Empty</h3> : inprogressList.map((list: any) => (
                    <div key={list._id}>
                        {list.name}
                        <Button variant="outlined" sx={{ height: 30, float: "right" }} onClick={() => handleDelete(list._id)}>Delete</Button>
                        <Button variant="outlined" sx={{ height: 30, float: "right", marginRight: "5px" }}
                            onClick={() => changeStatus(list)} className="button_item">{list.status}</Button>
                    </div>
                ))}
            </Stack>
        </Container>
    )
}