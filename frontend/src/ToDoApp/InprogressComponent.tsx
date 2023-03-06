import React from "react";
import { Button, Container, Stack } from "@mui/material";
import { useUpdateTodo, useDelteTodo } from "../services";
export const InprogressListComponent = (data: any) => {
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
            status: "finish"
        };
        UpdateTodo({ id, data } as any)
    }

    // }
    const inprogressList = data.inProgressToDo;

    return (
        <Container>
            <h3>In-progress list</h3>

            <Stack direction="column" spacing={2}>
                {inprogressList.length === 0 ? <h3>Empty</h3> : inprogressList.map((list: any) => (
                    <div key={list._id}>
                        {list.name}
                        <Button variant="outlined" sx={{ height: 30, float: "right" }} onClick={() => DeleteTodo(list._id)}>Delete</Button>
                        <Button variant="outlined" sx={{ height: 30, float: "right", marginRight: "5px" }}
                            onClick={() => changeStatus(list)} className="button_item">{list.status}</Button>
                    </div>
                ))}
            </Stack>
        </Container>
    )
}