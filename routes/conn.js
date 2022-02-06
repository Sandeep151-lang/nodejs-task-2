var mongoose = require('mongoose')


var url = `mongodb+srv://sandeep:sand92177@cluster0.i0wdm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(url).then(console.log('connection successfull')).catch((error) => console.log('error'));