import React from 'react';
import PropTypes from 'prop-types';
import {useState} from 'react'
import {Dialog, DialogContent, DialogContentText, DialogTitle, TextField, DialogActions, Button} from '@mui/material'
function FormDialog(props) {
    const {addDialogOpen,  handleCloseAddDialog, handleAddClick} = props;
    const [todoInput, setTodoInput] = useState('');
    const handleAddBtn = () =>{
        console.log(todoInput)
        handleAddClick(todoInput);
        handleCloseAddDialog();
    }
    return (
        <div>
            <Dialog open={addDialogOpen} onClose={handleCloseAddDialog} >
                <DialogTitle>Todo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add new todo which u want to complete
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Todo title"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={todoInput} 
                        onSubmit={e=>e.preventDefault()} 
                        onChange={e=>setTodoInput(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddDialog}>Cancel</Button>
                    <Button onClick={()=>handleAddBtn()}>Add</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default FormDialog;