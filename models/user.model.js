const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3

    },
}, {
        timestamps: true,
    
});
// capture the schema and store in User
const User = mongoose.model('User', userSchema);

// then will export to be used in other files
module.exports = User;
