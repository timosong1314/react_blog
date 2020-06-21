'use strict'

const Contoller = require('egg').Controller

class MainContoller extends Contoller {
    async index() {
        this.ctx.body = 'hi api'
    }

    async checkLogin() {
        let { userName, password } = this.ctx.request.body;
        const sql = "SELECT userName FROM admin_user WHERE userName = '" + userName + "' AND password ='" + password + "'"

        const res = await this.app.mysql.query(sql)
        if (res.length > 0) {
            //登录成功,进行session缓存
            let openId = new Date().getTime()
            this.ctx.session.openId = { 'openId': openId }
            this.ctx.body = { 'data': '登录成功', 'openId': openId }

        } else {
            this.ctx.body = { data: '登录失败' }
        }
    }
}

module.exports = MainContoller