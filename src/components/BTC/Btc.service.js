import axios from 'axios'

export {
    getBtcIndex
}

function getBtcIndex(){
    const request = axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    return request.then(response => response.data)
    .catch(e =>console.log(e))
}