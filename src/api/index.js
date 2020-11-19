import axios from "axios"

const service = axios.create({
    timeout: 3000, // 请求超时时间
})

// 请求拦截器
service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        console.log("请求错误", err)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        let res = {}
        res.status = response.status
        res.data = response.data
        return res
    },
    err => {
        console.log("响应错误", err)
    }
)

export default service;