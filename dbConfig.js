const mongoose = require('mongoose');

const DB = `mongodb+srv://sandeep:sand92177@cluster0.i0wdm.mongodb.net/mernstack?retryWrites=true&w=majority`
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connection successful`);

}).catch((er) => console.log(`no connection`));