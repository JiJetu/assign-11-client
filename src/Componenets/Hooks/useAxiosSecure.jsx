import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL:'https://pearl-ashore-server.vercel.app',
    withCredentials: true
})


const useAxiosSecure = () => {

    const{logOut} =useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        axiosSecure.interceptors.response.use(res =>{
            return res;
        }, error =>{
            console.log('error in interceptors',error.response);

            if(error.response.status === 401 || error.response.status === 403){
                console.log('logged out user');

                logOut()
                .then(() => {
                    navigate('/login')

                })
                .catch(error => console.error(error))
            }
        })
    },[])


   return axiosSecure;

};

export default useAxiosSecure;