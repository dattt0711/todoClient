import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import TodoList from './components/todoList';
import {useState, useRef, useEffect} from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Fab, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FormDialog from './components/formDialog';
import {getTodos, createTodo, updateTodo, deleteTodo} from './api/index.js';
function App() {
  const [todoList, setTodoList] = useState([]);
  useEffect(()=>{
    async function getTodo(){
      const url = 'http://localhost:3003/todos';
      const res = await getTodos(url)
      setTodoList(res.data)
    }
    getTodo();
  }, [])
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const handleClickOpenAddDialog = () => {
    setAddDialogOpen(true);
  };
  const handleCloseAddDialog = () => {
    setAddDialogOpen(false);
  };
  const handleClickOpenEditDialog = () => {
    console.log('helo')
    setEditDialogOpen(true);
  };
  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
  };
  const handleAddClick = async (newTitle, date="25-3-2022") => {
    const url = "http://localhost:3003/todos"
    const res = await createTodo(url, {title: newTitle, date});
    console.log(res.data)
    setTodoList(res.data)
  }
  const handleDeleteClick = async (id) => {
    const url = "http://localhost:3003/todos"
    const res = await deleteTodo(url, {id: id});
    console.log(res.data)
    setTodoList(res.data)
  }

  const handleEditClick = async (title, id, date="25-3-2022") => {
    const url = "http://localhost:3003/todos"
    const res = await updateTodo(url, {title, id, date});
    setTodoList(res.data)
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" >
        <Grid container justifyContent="space-between" direction="row"
          style={{ marginTop: '1rem' }}>
          <Grid item>
            <Typography variant="h4">
              TODO
            </Typography>
          </Grid>
          <Grid item>
            <Fab
              size="medium"
              color="primary"
              onClick={() => handleClickOpenAddDialog()}
            >
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
        <TodoList todoList={todoList} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} handleClickOpenAddDialog={handleClickOpenAddDialog} handleClickOpenEditDialog={handleClickOpenEditDialog}/>
        <FormDialog handleAddClick={handleAddClick} addDialogOpen={addDialogOpen} handleClickOpenAddDialog={handleClickOpenAddDialog} handleCloseAddDialog={handleCloseAddDialog} />
      </Container>
      <CssBaseline />
    </React.Fragment>
    
  );
}

export default App;
