const mongoose = require('mongoose');
dbConnect();
async function dbConnect() {
    try {
        await mongoose.connect('mongodb+srv://disx:disx3x@cluster0.pwfu3xp.mongodb.net/workvent', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(':))))))))))');
    }
    catch (error) {
        console.log(':((((((((((');
    }
}

module.exports = mongoose