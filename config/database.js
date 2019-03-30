
//if(process.env.NODE_ENV === 'production'){
if(true){
  module.exports = {mongoURI: 'mongodb+srv://Marek:toniejesthaslojakbyco@cluster0-rhh6a.mongodb.net/test?retryWrites=true'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}