import  client  from './makeRequest'


export const fetchAllTasks = () => {
    return  async () =>{
        try{
            const result=await client({path:"/tasks"})
            return result;
         }catch(err){
             console.log(err)
         }
    }
    
} 