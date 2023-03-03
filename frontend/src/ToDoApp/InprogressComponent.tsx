import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { finishListState, inprogressListState } from '../Recoil/listTodoState';
import { Button, Container, Stack } from "@mui/material";
import { todoState } from "../Recoil/atom";
export const InprogressListComponent = () => {
    // const inprogressList = useRecoilValue(inprogressListState);

    // const setFinish = useSetRecoilState(finishListState);
    // const handleClick = function (id: any) {
    //     setFinish(id);
    // };
    const todos = useRecoilValue(todoState)
    const inprogressList = todos.filter(todo => (todo['status'] === 'in progress'));
    return (
        <Container>
            <h3>In-progress list</h3>

            <Stack direction="column" spacing={2}>
                {inprogressList.length === 0 ? <h3>Empty</h3> : inprogressList.map((list: any) => (
                    <div key={list._id}>
                        {list.name}
                        <Button variant="outlined" sx={{ height: 30, float: "right" }} className="button_item">{list.status}</Button>
                    </div>
                ))}
            </Stack>
        </Container>
    )
}