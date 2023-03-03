import { Button, Container, Stack } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { todoState } from "../Recoil/atom";
// import { finishListState } from "../Recoil/listTodoState";

export const FinishListComponent = () => {
    // const finishList = useRecoilValue(finishListState);
    // console.log('finishList: ' + JSON.stringify(finishList))
    const todos = useRecoilValue(todoState)
    const finishList = todos.filter(todo => (todo['status'] === 'finish'));
    return (
        <Container>
            <h3>Finish list</h3>
            <Stack direction="column" spacing={2}>

                {finishList.map((list: any) => (
                    <div key={list._id}>
                        {list.name}
                        <Button sx={{ height: 30, float: "right" }} variant="outlined" >{list.status}</Button>
                    </div>
                ))}

            </Stack>

        </Container>
    )
}