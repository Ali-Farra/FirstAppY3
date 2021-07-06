import React from 'react';
import {useState} from "react";
import Button from '@material-ui/core/Button';
import "./todo.css"
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { lightBlue } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1440,
    backgroundColor: 'lightBlue',
    margin:"auto"
  },
  inputTask:{
      width:"100%",
      marginTop:40,
      maxWidth:1440,
      marginLeft:30,
  },
  button: {
    margin: theme.spacing(1),
    height: "50px",
    width: "70px",
  },
  textInput:{
    width:"90%"
  }
}));

function TodoList() {
  const classes = useStyles();
  const [newTask,setNewTask] = useState("");
  const [tasks,setTasks] = useState([])
  const [checked, setChecked] = useState([]);

  const addTask = ()=>{
    setTasks([...tasks,newTask]);
    setNewTask("")
  }
  const deletTask = (item)=>{
    setTasks(tasks.filter(x=>x !== item))
  }
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div className={classes.root}>
    <h1 className="text" style={{marginTop:"70px"}}>My Todo List</h1>
    <List className={classes.root}>
      {tasks.map((item) => {
        const labelId = `checkbox-list-label-${tasks.indexOf(item)}`;

        return (
          <ListItem key={tasks.indexOf(item)} role={undefined} dense button onClick={handleToggle(tasks.indexOf(item))}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(tasks.indexOf(item)) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${tasks.indexOf(item) + 1}- ${item}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={()=>{
                deletTask(item)
              }}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    {tasks.length<1&&<h2 className="text">ADD TASKS</h2>}
    <div className={classes.inputTask}>
    <TextField
        className={classes.textInput}
          value={newTask}
          id="outlined-textarea"
          label="New Task"
          placeholder="Add your task"
          multiline
          variant="outlined"
          onChange={(e)=>{
            setNewTask(e.target.value)
          }}
        />
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={!(newTask)}
        onClick={()=>{
          addTask()
        }}
      >
        Add
      </Button>

    </div>
    
    </div>
  );
}

export default TodoList;
