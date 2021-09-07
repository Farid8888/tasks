import React from 'react'
import NewTask from './components/NewTask/NewTask'
import {useEffect,useState,useCallback} from 'react'
import Tasks from './components/Tasks/Tasks'
import useHttp from './components/customHook/useHttp'

const App =()=>{
  const [tasks,setTasks] = useState([])
const {sendRequest,error,loading} = useHttp()
 
  // const fetchHandler=useCallback(()=>{
  //   let tasksfetch = []
  //   fetch('https://tasks-99963-default-rtdb.firebaseio.com/tasks.json').
  //   then(response=>response.json()).then(data=>{
  //     for(const key in data){
  //       tasksfetch.push({...data[key],id:key})
  //     }
  //     setTasks(tasksfetch)
  //   })
    
  //   console.log(tasksfetch)
  // },[])
  //  useEffect(()=>{
  //   fetchHandler()
  // },[fetchHandler])
const createData =(data)=>{
  let tasksfetch = []
  for(const key in data){
    tasksfetch.push({...data[key],id:key})
  }
  setTasks(tasksfetch)
}

  const fetchHandler=useCallback(()=>{
    sendRequest({url:'https://tasks-99963-default-rtdb.firebaseio.com/tasks.json'},
    // createData.bind(null)
    createData
    )
  },[])
   useEffect(()=>{
    fetchHandler()
  },[fetchHandler])


  const addHandler =(data)=>{
    setTasks(prevst=>{
      return prevst.concat(data)
    })
  }

  const ti =tasks.map(t=>t.text)
  console.log(ti)
  return(
    <React.Fragment>
     <NewTask getHandler={fetchHandler} addHandler={addHandler}/>
     <Tasks tasks={tasks} loading={loading} error={error}/>
    </React.Fragment>
  )
}


export default App