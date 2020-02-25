import axios from 'axios';

const instance = axios.create({
  baseURL: "https://react-my-burger-57b05.firebaseio.com/"
});

export default instance;