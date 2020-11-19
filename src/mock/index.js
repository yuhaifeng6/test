import Mock from 'mockjs'

function user(req, res) {
    let user = JSON.parse(req.body)
    if (user.username == "yhf" && user.pwd == "123") {
        return {
            code: 0,
            data: {
                msg: "登录成功",
                token: "yhftoken-" + user.username
            },
        }
    }
}

Mock.mock("/api/login", "post", user)