import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useDelteTodo } from "../services";
export const FinishListComponent = (data: any) => {
    const {
        isDeleting,
        isErrorDeleting,
        errorDeleting,
        DeleteTodo
    } = useDelteTodo()
    const finishList = data.finishTodo;
    return (
        <Container>
            <h3>Finish list</h3>
            <Stack direction="column" spacing={2}>
                {finishList.length === 0 ? <div><h3>Empty</h3></div> : finishList.map((list: any) => (
                    <div key={list._id}>
                        {list.name}
                        <Button sx={{ height: 30, float: "right" }} variant="outlined" onClick={() => { DeleteTodo(list._id) }}>Delete</Button>
                    </div>
                ))}

            </Stack>

        </Container>
    )
}