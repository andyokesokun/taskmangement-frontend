// in src/authProvider.js
export default {
    // called when the user attempts to log in
    login: async ({ username,password}) => {
        
        const request = new Request('https://localhost:44346/api/Auth/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        
       return fetch(request)
        
       .then( response => {
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json()
        }).then(result =>{
             if(result.status === "success"){
                 localStorage.setItem("token", result.token);
                 localStorage.setItem("access", result.access);
                 return Promise.resolve();
             }
             console.log(result);
             return Promise.reject(result);
           
        })

       
       
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("access");
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('token')
            ? true
            : false;
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
    
};