import { dbSetting } from '../db/connect.js'

export const userHandler = (req,res,next)=>{
    res.setHeader('Content-Type','application/json; charset=utf-8')
    let sql ="select * from user"
    dbSetting.query(sql,(err,result,fields)=>{
        console.log(`err:${err}`)
        console.log(`result:${result}`)
        console.log(`fields:${fields}`)
        if (err) throw err;
        userList =  result
        res.send(result)
    })
}

export const useritemHandler = (req,res,next) =>{
    res.setHeader('Content-Type','application/json; charset=utf-8')
    res.json(
        {
            id:333,
            name:"item",
            age:29
        }
    )
}
