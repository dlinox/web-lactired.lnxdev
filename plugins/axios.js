import axios from 'axios'

// Create a new Axios instance
const api = axios.create({
  // Your Axios configuration options here
})

export default (_, inject) => {
  // Inject the Axios instance into the context as $axios
  inject('axios', api)
}