import axios from 'axios'

const API = axios.create({
  baseURL: process.env.SERVER_URL,
  withCredentials: true,
  headers: {
    'Access-Control-Request-Method':
      'GET, PUT, POST, PATCH, DELETE, HEAD, OPTIONS',
    'Access-Control-Request-Headers': 'Content-Type, Authorization',
  },
})

export default API
