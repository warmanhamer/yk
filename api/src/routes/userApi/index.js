/*
 * @Author: mikey.gwx 
 * @Date: 2019-04-08 08:37:17 
 * @Last Modified by: mikey.gwx
 * @Last Modified time: 2019-04-08 12:16:30
 */
var Mongo = require("mongodb-curd");
var dName = 'yk';
var cName = 'data';
module.exports = {
    getdata(req, res, next) {
        // let { type } = req.query;
        // if (!type) {
        //     res.send({
        //         code: 2,
        //         msg: "缺失参数"
        //     })
        // }
        Mongo.find(dName, cName, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    msg: "success",
                    data: result,
                    total: result.length
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    },
    getadd(req, res, next) {
        let { name, tel, adtel, ad, xxad } = req.query;
        if (!name, !tel, !adtel, !ad, !xxad) {
            res.send({
                code: 2,
                msg: "缺失参数"
            })
        }
        Mongo.insert(dName, cName, req.query, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    msg: "success",
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    },
    getdel(req, res, next) {
        let { _id } = req.query;
        if (!_id) {
            res.send({
                code: 2,
                msg: "缺失参数"
            })
        }
        Mongo.remove(dName, cName, req.query, function(result) {
            if (result) {
                res.send({
                    code: 1,
                    msg: "success",
                })
            } else {
                res.send({
                    code: 0,
                    msg: "error"
                })
            }
        })
    }
}