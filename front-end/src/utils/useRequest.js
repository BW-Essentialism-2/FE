import  { axiosWithAuth } from './axiosWithAuth'
import axios from 'axios'

const BASE_URL = 'https://essentialism-be-api.herokuapp.com'

export const useRequest = async (url, method, isAuth, data) => {
    let returnData;
    method = method.toLowerCase()
    if(isAuth === false) {
        switch(method) {
            case 'post':
                await axios({
                    method: method,
                    url: BASE_URL + url,
                    data: data
                })
                    .then(res => returnData = res)
                break;
            case 'put':
                await axios({
                    method: method,
                    url: BASE_URL + url,
                    data: data
                })
                    .then(res => returnData = res)
                break;
            case 'get':
                await axios({
                    method: method,
                    url: BASE_URL + url,
                })
                    .then(res => returnData = res)
                break;
            case 'delete':
                await axios({
                    method: method,
                    url: BASE_URL + url,
                })
                    .then(res => returnData = res)
                    break;
            default: 
                return;
        }
    }
    else {
        switch(method) {
            case 'post':
                await axiosWithAuth().request({
                    method: method,
                    baseURL: BASE_URL + url,
                    data: data
                })
                    .then(res => returnData = res)
                break;
            case 'put':
                await axiosWithAuth().request({
                    method: method,
                    baseURL: BASE_URL + url,
                    data: data
                })
                    .then(res => returnData = res)
                break;
            case 'delete':
                await axiosWithAuth().request({
                    method: method,
                    baseURL: BASE_URL + url,
                })
                    .then(res => returnData = res)
                break;
            case 'get':
                await axiosWithAuth().request({
                    method: method,
                    baseURL: BASE_URL + url,
                })
                    .then(res => returnData = res)
                break;
            default: 
                return;
        }
    }
    return returnData;
}