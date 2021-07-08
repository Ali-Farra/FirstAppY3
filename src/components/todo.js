import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import "./todo.css"
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import db from '../firebase'



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
  const [loading,setLoading]= useState(true)
  const [loadingAdding,setLoadingAdding]= useState(false)
  const [newTask,setNewTask] = useState("");
  const [tasks,setTasks] = useState([])

  useEffect(()=>{
    const fetchData= ()=>{
      setLoading(true)
      db.collection("tasks").onSnapshot((snapshot)=>{
        setTasks(snapshot.docs.map((doc)=>{ return {...doc.data(),id:doc.id} }))
        setLoading(false)
      },(error)=>{
        setLoading(false)
        console.log(error.message)
      })
    }
    fetchData()
  },[])


  const addTask = async () => {

    setLoadingAdding(true)
    await db.collection("tasks").add({
      taskText: newTask,
      checked: false
    }).catch(error=>{
      console.log(error.message)
    })
    setNewTask("")
    setLoadingAdding(false)
  }


  const deletTask = async (taskId) => {
    await db.collection('tasks').doc(taskId).delete()
    .catch(error=>{
      console.log(error.message)
    })
  }


  return (
    <div className={classes.root}>
    <h1 className="text" style={{marginTop:"70px"}}>My Todo List</h1>
    <List className={classes.root}>
      {tasks.map((item) => {
        const index = tasks.indexOf(item);
        const labelId = `checkbox-list-label-${index}`;

        return (
          <ListItem key={index} role={undefined} dense button onClick={(item.id)}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${index + 1}- ${item.taskText}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={()=>{
                deletTask(item.id)
              }}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    {(tasks.length<1 && !loading)?<h2 className="text">ADD TASKS!</h2>: (loading)&&<h2 className="text">Wait...</h2>}

    <div className={classes.inputTask}>

    <TextField

        className={classes.textInput}
          value={newTask}
          id="outlined-textarea"
          label="New Task"
          placeholder="Add your task"
          variant="outlined"
          onChange={(e)=>{
            setNewTask(e.target.value)
          }}
        />
    <Button
        variant="contained"
        color="primary"
        className={classes.button}
        disabled={(!(newTask) || loadingAdding)}
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
