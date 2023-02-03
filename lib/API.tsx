import axios from 'axios'

export const API = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,PATCH,DELETE,OPTIONS,REQUEST',
    'Access-Control-Allow-Headers':
      'x-access-token, Origin, X-Requested-With, Content-Type, Accept',
  },
})
