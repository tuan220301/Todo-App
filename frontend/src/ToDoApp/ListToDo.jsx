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
import { useQuery, useQueryClient } from "react-query";
export const ListToDo = () => {
    const setTodo = useSetRecoilState(todoState)
    const [text, setText] = React.useState('');
    const [list, setList] = React.useState([])
    const [loading, setLoading] = React.useState(false);
    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const queryClient = useQueryClient()
    const query = useQuery('todos', getTodos())


    // const todos = useQuery(['todo', setList], async () => {
    //     const data = getTodos()
    //     return data
    // })
    console.log('query: ' + JSON.stringify(query))
    setList(query)
    return (
        <div>
            <ul>
                {query.map(todo => (
                    <li key={todo._id}>{todo.name}</li>
                ))}
            </ul>
        </div>
    )
    // useQuery(['todos', data], getTodos())
    // if (data) {
    //     console.log('data: ' + JSON.stringify(data))
    // }
    // if (allTodo) {
    //     console.log('alltodo: ' + JSON.stringify(allTodo))
    // }

    // if (isError) {
    //     return (
    //         <div>Error</div>
    //     )
    // }
    // return (
    //     <div>{data}</div>
    // )
    // const getListTodo = () => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         getTodos().then((res) => setTodo(res))
    //         setLoading(false)
    //     }, 800)
    // }
    // // React.useEffect(() => {
    // //     getListTodo()
    // // }, [])
    // const light = {
    //     palette: {
    //         mode: "light",
    //     },
    // };

    // const dark = {
    //     palette: {
    //         mode: "dark",
    //     },
    // };

    // const changeTheme = () => {
    //     setIsDarkTheme(!isDarkTheme);
    // };


    // let params_auto_complete = [];
    // list.forEach(list => {
    //     params_auto_complete.push(list.name)
    // })

    // // const handleAddNewAction = () => {
    // //     if (!text) {
    // //         alert('input empty');
    // //     }
    // //     else {
    // //         const param = {
    // //             name: text,
    // //             status: 'new'
    // //         }
    // //         // console.log('param: ' + JSON.stringify(param))
    // //         postTodo(param).then(() => {
    // //             getListTodo()
    // //             setText("");
    // //         })

    // //     }
    // // }



    // const handleChangeText = (e) => {
    //     setText(e.target.value);
    // };
    // const handleKeypress = e => {
    //     if (e.keyCode === 13) {
    //         handleAddNewAction();
    //     }
    // };

    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(0.1),
    //     // textAlign: 'center',
    //     color: theme.palette.text.secondary,
    //     width: "40%",
    //     margin: 10
    // }));
    // return (
    //     <ThemeProvider theme={isDarkTheme ? createTheme(dark) : createTheme(light)}>
    //         <CssBaseline />
    //         {/* <div className="title">
    //             <h1>
    //                 To Do List
    //             </h1>
    //         </div> */}
    //         <HeaderComponent />

    //         {/* {
    //             loading ? <Box display="flex" justifyContent="center" alignItems="center" marginTop="10%">
    //                 <CircularIndeterminate />
    //             </Box> : <Container>
    //                 <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} >
    //                     <Item>
    //                         <NewListComponent />
    //                     </Item>
    //                     <Item>
    //                         <InprogressListComponent />
    //                     </Item>
    //                     <Item>
    //                         <FinishListComponent />
    //                     </Item>
    //                 </Stack>

    //                 <Box display="flex" justifyContent="center" alignItems="center">
    //                     <Autocomplete
    //                         disablePortal
    //                         id="combo-box-demo"
    //                         options={params_auto_complete}
    //                         sx={{ width: 300, textAlign: "center" }}
    //                         renderInput={(params) => <TextField {...params} label={'New task'} />}
    //                         onInputChange={handleChangeText}
    //                         onKeyDown={handleKeypress}
    //                     />
    //                     <Button sx={{ height: 50, marginLeft: "1%" }} variant="contained" onClick={handleAddNewAction}>Add new</Button>
    //                 </Box>
    //                 <Switch sx={{
    //                     bottom: "5%",
    //                     right: "5%",
    //                     position: "absolute"
    //                 }}
    //                     checked={isDarkTheme} onChange={changeTheme}
    //                 />
    //             </Container>
    //         } */}

    //     </ThemeProvider >
    // )
}