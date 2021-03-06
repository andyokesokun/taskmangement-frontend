// in src/authProvider.js
import client from '../utils/makeRequest'

const authMethods={
    // called when the user attempts to log in
    login: async ({ username,password}) => {
    
        const data ={username, password}
    
        try{      
            const result= await client({path:"Auth/login", method:'POST', data});
            if(result.status === "success"){
                sessionStorage.setItem("token", result.token);
                sessionStorage.setItem("to", "tets");
                sessionStorage.setItem("access", result.access);
                return Promise.resolve(result);
            }
        
            return Promise.reject(result);

        }catch(err){
            throw new Error(err);
        }
      
      
       
    },
    // called when the user clicks on the logout button
    logout: () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("access");
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            sessionStorage.removeItem('token');
            sessionStorage.removeItem('access');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return sessionStorage.getItem('token')
            ? true
            : false;
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
    
};

export default authMethods;