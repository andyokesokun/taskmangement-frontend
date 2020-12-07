const makeRequest = async ({baseUrl , path, method, data}) => {
    baseUrl = baseUrl || 'https://localhost:44346/api'
    const goto = `${baseUrl}/${path}`;


    
    var headers =new Headers({ 'Content-Type': 'application/json' });
    const token =sessionStorage.getItem("token")
    if(token){ 
        headers.append('Authorization', `Bearer ${token}`);
      
    }
    
     const requestContent = {
        method: method || 'GET', 
        headers:  headers
      }
   
      if(data){ 
        requestContent.body= JSON.stringify(data); 
      }
 
    const request = new Request(goto,requestContent )


    const response = await fetch(request);
    const result = await response.json();

    return result;

}

export default makeRequest;


