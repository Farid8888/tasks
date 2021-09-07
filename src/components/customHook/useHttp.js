import {useState,useCallback} from 'react'



const useHttp =()=>{
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)
    const sendRequest =useCallback(async(responseConfig,applyData)=>{
        setLoading(true)
        setError(null)
        try{
            const response = await fetch(responseConfig.url,{
                method:responseConfig.method ? responseConfig.method : 'GET',
                headers:responseConfig.headers ? responseConfig.headers : {},
                body:responseConfig.body ? JSON.stringify(responseConfig.body) : null
            })
            if(!response.ok){
                throw new Error('Request failed')
            }
            const data =await response.json()
            applyData(data)
        }catch(error){
            setError(error.message)
        }
        setLoading(false)
    },[])
    return {
        sendRequest:sendRequest,
        loading:loading,
        error:error
    }
}

export default useHttp


