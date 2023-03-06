import React from "react";
import { FinishListComponent } from "./FinishComponent";
import { InprogressListComponent } from "./InprogressComponent";
import { NewListComponent } from "./NewListComponent";
import { Switch, Button, Autocomplete, TextField, Container, CssBaseline, Stack, Divider, Paper, Box } from '@mui/material';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { HeaderComponent } from "../Constant/HeaderComponent";
import { styled } from '@mui/material/styles';
import { todoState } from "../Recoil/atom";
import { postTodo, getTodos } from "../Recoil/toDoController";
import { useSetRecoilState, useRecoilValue } from "recoil";
import CircularIndeterminate from "../Constant/Loading";
import { useGetTodos, usePostTodo } from "../services";
export const ListToDo = () => {
    const [text, setText] = React.useState('');
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const { todos, isLoading, isError, error } = useGetTodos()
    const { isCreating,
        isSuccessCreating,
        isErrorCreating,
        errorCreateing,
        CreateTodo } = usePostTodo()

    const isLoad = React.useMemo(() => {
        return isLoading || isCreating || false
    }, [isLoading, isCreating]);
    const light = {
        palette: {
            mode: "light",
        },
    };

    const dark = {
        palette: {
            mode: "dark",
        },
    };

    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    let newTodo = [];
    let inProgressToDo = [];
    let finishTodo = [];
    if (!isLoading) {
        todos.forEach(todo => {
            if (todo.status === 'new') {
                newTodo.push(todo)
            }
            if (todo.status === 'in progress') {
                inProgressToDo.push(todo)
            }
            if (todo.status === 'finish') {
                finishTodo.push(todo)
            }

        });

    }

    const handleAddNewAction = () => {
        if (!text) {
            alert('input empty');
        }
        else {
            const param = {
                name: text,
                status: 'new'
            }
            // console.log('param: ' + JSON.stringify(param))
            CreateTodo(param)
        }
    }



    const handleChangeText = (e) => {
        setText(e.target.value);
    };
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            // handleAddNewAction();
        }
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "40%",
        margin: 10
    }));
    return (
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
            <CssBaseline />
            <HeaderComponent />
            {
                isLoad ? <Box display="flex" justifyContent="center" alignItems="center" marginTop="10%">
                    <CircularIndeterminate />
                </Box> : <Container>
                    <Stack direction="row">
                        <Item>
                            <NewListComponent newList={newTodo} />
                        </Item>
                        <Item>
                            <InprogressListComponent inProgressToDo={inProgressToDo} />
                        </Item>
                        <Item>
                            <FinishListComponent finishTodo={finishTodo} />
                        </Item>
                    </Stack>

                    <Box display="flex" justifyContent="center" alignItems="center">
                        <TextField id="outlined-basic"
                            onChange={handleChangeText}
                            onKeyDown={handleKeypress}
                            label="Outlined" variant="outlined" />
                        <Button sx={{ height: 50, marginLeft: "1%" }} variant="contained" onClick={handleAddNewAction}>Add new</Button>
                    </Box>
                    <Switch sx={{
                        bottom: "5%",
                        right: "5%",
                        position: "absolute"
                    }}
                        checked={isDarkTheme} onChange={changeTheme}
                    />
                </Container>
            }

        </ThemeProvider >
    )
}