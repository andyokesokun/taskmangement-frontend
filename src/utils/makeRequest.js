import axios from 'axios'
const makeRequest = async ({baseUrl , path, method, data}) => {
    baseUrl = baseUrl || 'https://localhost:44346/api'
    const goto = `${baseUrl}/${path}`;
    
    axios.defaults.baseURL =baseUrl;
    const token =sessionStorage.getItem("token")

    if(token){ 
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
   
    }


    try{
      const response = await axios({
          method: method || 'GET',
          url: path,
          data: data || ""
        });
      console.log(response);
      return response.data;
    }catch(err){
        console.log('error',err.toJSON() );
       
    }


}

export default makeRequest;


