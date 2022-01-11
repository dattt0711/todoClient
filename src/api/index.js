const axios = require('axios');

export const getTodos = (url) => {
   return axios.get(url);
 
}

export const createTodo = async (url, todo) => {
    console.log(todo)
   return axios.post(url, todo);
}

export const updateTodo = (url, todo) => {
   return axios.patch(url, todo);
}

export const deleteTodo = (url, id) => {
   return axios.delete(url, {data:id});
}