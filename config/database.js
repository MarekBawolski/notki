
if(process.env.NODE_ENV === 'production'){
  module.exports = {mongoURI: 'mongodb+srv://admin:admin@notki-4cmym.mongodb.net/test?retryWrites=true&w=majority'}
} else {
  module.exports = {mongoURI: 'mongodb://localhost/vidjot-dev'}
}