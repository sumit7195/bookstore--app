const config = {
     production: {
        SECRET:process.env.SECRET,
        DATABASE: process.env.MONGODB_URI,
     },
     defalut:{
        SECRET: 'SUPERSECRETPASSWORD123',
        DATABASE: 'mongodb://localhost:27017/thebookshelf'
     }
}


exports.get = function get(env){

 return config[env] || config.defalut

}