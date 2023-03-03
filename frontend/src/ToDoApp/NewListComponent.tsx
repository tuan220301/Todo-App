import React from "react";
import { useRecoilValue, useSetRecoilState } from 'recoil';
// import { newListState, inprogressListState } from '../Recoil/listTodoState';
import { Container, Stack, Button } from "@mui/material";
import { todoState } from "../Recoil/atom";
import { newTodo } from "../Recoil/selector";
export const NewListComponent = () => {
    const todos = useRecoilValue(todoState)
    const getNewTodo = useRecoilValue(newTodo)
    // const newList = useRecoilValue(newListState)
    // console.log('newList: ' + JSON.stringify(newList))
    // const setInprogress = useSetRecoilState(inprogressListState);

    // const handleClick = function (prop: any) {
    //     console.log('id: ' + prop.id)
    //     setInprogress(prop.id);
    // }
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
                            <Button key={list._id} variant="outlined" sx={{ height: 30, float: "right" }} className="button_item">{list.status}</Button>
                        </div>
                    ))}
                </Stack>
            </React.Suspense>
        </Container>
    )
}