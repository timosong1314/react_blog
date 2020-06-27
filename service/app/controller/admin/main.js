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

    async getTypeInfo() {
        const data = await this.app.mysql.select('type')
        this.ctx.body = {
            data
        }
    }

    async addArticle() {
        let tmpArticle = this.ctx.request.body
        const result = await this.app.mysql.insert('article', tmpArticle)
        const insertSuccess = result.affectedRows === 1
        const insertId = result.insertId
        this.ctx.body = {
            isSuccess: insertSuccess,
            insertId
        }
    }

    async updateArticle() {
        let tmpArticle = this.ctx.request.body

        const result = await this.app.mysql.update('article', tmpArticle);
        const updateSuccess = result.affectedRows === 1;
        this.ctx.body = {
            isSuccess: updateSuccess
        }
    }

    async getArticleList() {
        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            "article.addTime as addTime ," +
            'article.view_count as view_count,' +
            'type.typeName as typeName ' +
            'FROM article LEFT JOIN type on article.type_id = type.id ' +
            'ORDER BY article.id DESC';

        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            list: result
        }
    }

    async delArticle() {
        let id = this.ctx.params.id;
        const res = await this.app.mysql.delete('article', { 'id': id })
        this.ctx.body = {
            data: res
        }
    }

    async getArticleById() {
        let id = this.ctx.params.id;

        //todo  判断ID是否存在

        let sql = 'SELECT article.id as id,' +
            'article.title as title,' +
            'article.introduce as introduce,' +
            "article.addTime as addTime ," +
            "article.article_content as article_content ," +
            'article.view_count as view_count,' +
            'type.typeName as typeName, ' +
            'type.id as typeId ' +
            'FROM article LEFT JOIN type on article.type_id = type.id ' +
            'WHERE article.id = ' + id;
        const result = await this.app.mysql.query(sql)
        this.ctx.body = {
            data: result
        }
    }

}

module.exports = MainContoller