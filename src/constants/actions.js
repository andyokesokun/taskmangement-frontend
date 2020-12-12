import {ADDTASK, REMOVETASK,UPDATETASK,AUTH,ERROR, ADDUSER}  from './actionTypes';

export const addTask =(task)=>({type: ADDTASK, payload: task });
export const removeTask =(taskId)=>({ type: REMOVETASK, id:taskId});
export const updateTask = (index,task) =>({type: UPDATETASK, payload:{index,...task}  });
export const setAuth = (data) =>({type: AUTH, payload: data });
export const error = (data) =>({type: ERROR, payload: data });
export const addUser = (data) =>({type: ADDUSER, payload: data });
export const relogin = (value) =>({type: ADDUSER, payload:{relogin:value} });
