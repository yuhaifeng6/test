export default {
    set userToken (val) {
        localStorage.setItem("token", val)
    },
    get userToken() {
        return localStorage.getItem("token")
    },
    loadStatus: false,
    sum: 10,
    name: "yhf",
    sex: "男"
}