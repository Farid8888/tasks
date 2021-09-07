import classes from './TakskItem.module.css'




const TaskItem =(props)=>{
    return(
  <li className={classes.taskItem}>
      <p>{props.text}</p>
  </li>
    )
}


export default TaskItem