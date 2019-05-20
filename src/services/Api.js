import {axios} from 'axios'
import { TIMEOUT } from 'dns';
const API_ROOT =``

class ApiService {
    constructor(baseUrl = API_ROOT,timeout= TIMEOUT,headers= Headers,auth=AUTH){
        const client = axios.create({
            baseUrl,timeout,headers,auth
        })
        client.interceptors.responce.use(this.handleSuccess,this.handleError)
        this.client= client;
    }

    handleError(responce){
       return responce;
    }
    handleSuccess(error){
       return Promise.reject(error)
    }
}