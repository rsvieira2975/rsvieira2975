import axios from 'axios'

export const qcl = axios.create({
     baseURL: 'http://localhost:8080/api/'
})