import React from "react";
import { Container, Stack, Button } from "@mui/material";
import { useUpdateTodo, useDelteTodo } from "../services";



export const NewListComponent = (data: any) => {
    const { isUpdating,
        isSuccessUpdating,
        isErrorUpdating,
        errorUpdating,
        UpdateTodo } = useUpdateTodo()

    const {
        isDeleting,
        isErrorDeleting,
        errorDeleting,
        DeleteTodo
    } = useDelteTodo()


    const changeStatus = (prop: any) => {
        const id = prop._id;
        const data = {
            name: prop.name,
            status: "in progress"
        };
        UpdateTodo({ id, data } as any)
    }
    // const newList = getNewTodo;
    // console.log('todo: ' + JSON.stringify(data.newList))
    return (
        <Container>
            <h3>New list</h3>
            <Stack direction="column" spacing={2}>
                {data.newList.length === 0 ? <h3>Empty</h3> : data.newList.map((list: any) => (
                    <div key={list._id}>
                        {list.name}

                        <Button variant="outlined" sx={{ height: 30, float: "right", marginRight: "5px" }} onClick={() => DeleteTodo(list._id)}>Delete</Button>
                        <Button variant="outlined" sx={{ height: 30, float: "right", marginRight: "5px" }} onClick={() => {
                            changeStatus(list)
                        }}>{list.status}</Button>
                    </div>
                ))}
            </Stack>
        </Container>
    )
}