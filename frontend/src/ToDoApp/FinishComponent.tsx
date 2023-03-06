import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { todoState } from "../Recoil/atom";
import { finishTodo } from "../Recoil/selector";
import { getTodos, deleteTodo } from "../Recoil/toDoController";
// import { finishListState } from "../Recoil/listTodoState";

export const FinishListComponent = () => {
    // const finishList = useRecoilValue(finishListState);
    // console.log('finishList: ' + JSON.stringify(finishList))
    const setTodo = useSetRecoilState(todoState)
    const getFinishTodo = useRecoilValue(finishTodo)
    const getListTodo = () => {
        getTodos().then((res) => setTodo(res))
    };
    const handleDelete = (id: number) => {
        deleteTodo(id).then(() => {
            getListTodo();
        })
    };
    const finishList = getFinishTodo;
    return (
        <Container>
            <h3>Finish list</h3>
            <Stack direction="column" spacing={2}>
                {finishList.map((list: any) => (
                    <div key={list._id}>
                        {list.name}
                        <Button sx={{ height: 30, float: "right" }} variant="outlined" onClick={() => { handleDelete(list._id) }}>Delete</Button>
                    </div>
                ))}

            </Stack>

        </Container>
    )
}