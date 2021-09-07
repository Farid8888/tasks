import Card from '../UI/Card'
import TaskForm from './TaskForm'

const NewTask =(props)=>{
    return(
        <Card>
       <TaskForm getHandler={props.getHandler} addHandler={props.addHandler}/>
       </Card>
    )
}

export default NewTask