import axios from 'axios'

export {
    getCatsInfo
}

function getCatsInfo(){
    const request = axios.get('https://catfact.ninja/fact')
    return request.then(response => response.data)
    .catch(e =>console.log(e))
}