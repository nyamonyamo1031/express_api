import mysql from 'mysql';
import {dbConfig} from './config.js' //dbConfigは .envにする

export const dbSetting =  mysql.createConnection({
    host: dbConfig.host,
    port: dbConfig.port,
    user: dbConfig.user,
    password: dbConfig.password,
    database: dbConfig.database
});

export const connectConfig =()=> {
    dbSetting.connect((err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("MySQL connect done")
        }
    })
}
