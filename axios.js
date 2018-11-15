import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://udemy-react-60d5e.firebaseio.com/'
});

export default instance;