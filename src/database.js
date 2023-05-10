const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://dbMiches:12345@atlascluster.ys39nvy.mongodb.net/?retryWrites=true&w=majority")
.then((result) => {
    console.log("Mongodb connected") 
}).catch((err) => {
    console.err(err)
});





