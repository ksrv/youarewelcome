import axios from 'axios';
import Env from './env';


const agent = axios.create({
  baseURL: Env.CurrentAPI
});

agent.interceptors.request.use(
  (config) => {
    config.headers = {
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    };
    return config;
  }, 
  (error) => {
    console.error( 'REQUEST error -' , error.response );
    throw error;
  }
);

export const POST = 'post';

export default agent;
