import fs from  'fs'

const dbFileCheck = async ()=>{

    if(!fs.existsSync('db.json')){
        console.log('file does  exists : create your database file' )
    }
}


export default dbFileCheck