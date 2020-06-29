import axios from 'axios';

// let baseURL = process.env.NODE_ENV === 'development' ? '/api' : ''  //判断如果是在开发环境下时就进行反向代理
const service = axios.create({
    // baseURL,
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    timeout: 5000,
});

service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data;
        } else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
        return Promise.reject();
    }
);

export default service;
