import axios from 'axios'

export {
    getActivities
}

function getActivities(){
    const request = axios.get('https://www.boredapi.com/api/activity')
    return request.then(response => response.data)
    .catch(e =>console.log(e))
}