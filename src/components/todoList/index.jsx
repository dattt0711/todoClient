import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { pink } from '@mui/material/colors';
import {Grid, Paper, Typography} from '@mui/material';
function TodoList(props) {
    const {todoList, handleDeleteClick, handleEditClick, handleClickOpenEditDialog} = props;
    const editTodo = (id) =>{
        const newTitle = prompt('Enter new title here: ');
        handleClickOpenEditDialog();
        if(newTitle != null) return handleEditClick(newTitle, id);
    }
    return (
        <div>
            <Grid container direction="column" style={{marginTop:"2rem"}} spacing={2}>
                {todoList.map((todo, index) => {
                    return(
                        <Grid item key={todo._id}>
                            <Paper style={{ padding: '0.8rem' }}>
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography variant="h6">
                                            {todo.title}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <span onClick={() => handleDeleteClick(todo._id)} style={{ padding: '0 10px', cursor: 'pointer' }}>
                                            <DeleteIcon sx={{ color: pink[500] }} />
                                        </span>
                                        <button onClick={() => editTodo(todo._id)}>
                                            <EditIcon color="primary" />
                                        </button>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
}

export default TodoList;