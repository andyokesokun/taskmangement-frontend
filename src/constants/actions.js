import {ADD, REMOVE,UPDATE}  from './actionTypes';

export const AddTask =(task)=>({type: ADD, payload: task });
export const RemoveTask =(taskId)=>({ type: REMOVE, id:taskId});
export const UpdateTask = (index,task) =>({type: UPDATE, payload:{index,...task}  });
