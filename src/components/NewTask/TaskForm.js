import classes from './TaskForm.module.css'
import {useRef} from 'react'
import useHttp from '../customHook/useHttp'

const TaskForm =(props)=>{
const inputRef = useRef()
const {sendRequest} = useHttp()
const createData =(data)=>{
  const newData = {
      id:data.name,
      text:inputRef.current.value
  }
  props.addHandler(newData)
}
const onPostHandler =(event)=>{
event.preventDefault()
sendRequest(
    {
    url:'https://tasks-99963-default-rtdb.firebaseio.com/tasks.json',
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:{text:inputRef.current.value}
},
   createData.bind(null)

 )
// fetch('https://tasks-99963-default-rtdb.firebaseio.com/tasks.json',{
//     method:'POST',
//     headers:{'Content-type':'application/json'},
//     body:JSON.stringify({text:inputRef.current.value})
// }).then(response=>response.json()).then(data=>{
//     props.addHandler({
//         id:data.name,
//         text:inputRef.current.value
//     })
// })
}

    return(
       <form className={classes.form} onSubmit={onPostHandler}>
           <input id='tasks' type='text' ref={inputRef}/>
           <button type='submit'>Add Task</button>
       </form>
    )
}

export default TaskForm