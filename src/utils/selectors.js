export const removeTask =(state,taskId)=>{
    return state.task.tasks.filter(id => id !== taskId ) 
}

export const getTaskById =(tasks,taskId)=>{
     let data=tasks.find( (item) => item.id === taskId )
    return data
};



export const getUserListNotAssigned =(state,listItems)=>{
    const filterList =[];
    const users =state.user.users
    
    console.log(users)
    users.forEach(user => {
          if(!listItems.find( (x) => x === user  ) ){
              filterList.push(user);
          }
      });

    return filterList;
}

export const findUserByUsername =(state)=>((state, username) => state.users.find( (x) => x ===username) )
    

