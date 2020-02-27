import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "BASEURL",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    })
}