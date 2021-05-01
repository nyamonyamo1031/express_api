
export const indexHandler = (req,res,next)=>{
    res.setHeader('Content-Type','application/json; charset=utf-8')
    res.json(
        {"status":200}
    )
}
