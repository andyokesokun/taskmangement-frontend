export const removeTaskId =(state,taskId)=>{
    return state.taskIds.filter(id => id !== taskId ) 
}

export const removeTask =(state,taskId)=>{
    return state.tasks.filter(id => id !== taskId ) 
}

export const getTaskById =(state,taskId)=>{
    return state.tasks.filter(items => items.id === taskId ) ;
}
