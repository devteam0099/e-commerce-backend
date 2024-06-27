let corsConfig = ()=>{
    let corsOptions = {
      // url
        origin:['http://localhost:5173','http://192.168.43.34:5173','*'],
        methods:['GET','POST','PUT','delete','options'],
        headers :['content-type'],  
      }
}
export default corsConfig