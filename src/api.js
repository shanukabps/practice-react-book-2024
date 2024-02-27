import axios from 'axios'

const searchImages = async(term)=>{


   const response =await  axios.get('https://jsonplaceholder.typicode.com/todos/1')
   console.log('response', term)
}

export default searchImages