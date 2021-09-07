import TaskItem from './TaskItem'
import Card from '../UI/Card'
import classes from './Tasks.module.css'


const Tasks =(props)=>{
    let content =props.tasks.map((task)=>{
        return <TaskItem key={task.id} text={task.text}/>
    }) 
if(props.loading){
     content = <p>...Loading</p>
}
if(props.error){
    content =<p>{props.error}</p>
}
    return(
        <Card>
     <ul className={classes.tasks}>
         {content}
     </ul>
     </Card>
    )
}

export default Tasks