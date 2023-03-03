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
export const ListToDo = () => {
    // const todos = useRecoilValue(todoState)
    const setTodo = useSetRecoilState(todoState)

    React.useEffect(() => {
        getTodos().then((res) => setTodo(res))
    }, [])
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
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const changeTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    const [text, setText] = React.useState('');


    const [list, setList] = React.useState([])


    let params_auto_complete = [];
    list.forEach(list => {
        params_auto_complete.push(list.name)
    })

    const handleAddNewAction = () => {
        if (!text) {
            alert('input empty');
        }
        else {
            const param = {
                name: text,
                status: 'new'
            }
            postTodo(param).then((res) => {
                const { param: newData } = res;
                setTodo((prev) => {
                    return [...prev, newData]
                })
            })
            // addNewTodo(param)
            setText("");
        }
    }



    const handleChangeText = (e) => {
        setText(e.target.value);
    };
    const handleKeypress = e => {
        if (e.keyCode === 13) {
            handleAddNewAction();
        }
    };

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        // textAlign: 'center',
        color: theme.palette.text.secondary,
        width: "30%",
        margin: "1%"
    }));
    return (
        <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
            <CssBaseline />
            {/* <div className="title">
                <h1>
                    To Do List
                </h1>
            </div> */}
            <HeaderComponent />
            <Container>
                <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} >
                    <Item>
                        <NewListComponent />
                    </Item>
                    <Item>
                        <InprogressListComponent />
                    </Item>
                    <Item>
                        <FinishListComponent />
                    </Item>
                </Stack>

                <Box display="flex" justifyContent="center" alignItems="center">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={params_auto_complete}
                        sx={{ width: 300, textAlign: "center" }}
                        renderInput={(params) => <TextField {...params} label={'New task'} />}
                        onInputChange={handleChangeText}
                        onKeyDown={handleKeypress}
                    />
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
        </ThemeProvider >
    )
}