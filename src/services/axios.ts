import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://projeto-monitoria-api.herokuapp.com/'
})

//https://projeto-monitoria-api.herokuapp.com/
