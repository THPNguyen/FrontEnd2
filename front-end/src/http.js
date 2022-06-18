import axios from 'axios'
// axios.defaults.xsrfHeaderName = "X-CSRFToken"
// axios.defaults.xsrfCookieName = 'csrftoken'
export default axios.create({
    baseURL: 'http://localhost:8000/api',
    headers:{
        "Content-Type" : "application/json",

    }
})
