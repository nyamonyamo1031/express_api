import {indexHandler} from "./controller/indexController.js"
import {userHandler,useritemHandler} from "./controller/userController.js"

export const router = (app) =>{
    app.get("/",indexHandler)
    app.get("/user",userHandler)
    app.get("/user/:path",useritemHandler)
}
