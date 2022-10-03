import axios from "axios";

const instance  = axios.create({
    timeout : 3000
});

instance.interceptors.response.use(
    (response)=>{
        
        return response.data
    },
    (error)=>{
        console.log(error)
    }
    
)

export default instance
