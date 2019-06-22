import axios from 'axios'; 

const instance = axios.create({
    baseURL: 'https://burgerapp-julius.firebaseio.com/'
});

export default instance;