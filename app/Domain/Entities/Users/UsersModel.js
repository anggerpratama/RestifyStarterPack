import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define User Schema
const usersSchema = new Schema({

    firstname: {
        type : String ,
        required: true
    },
    lastname: {
        type : String ,
        required: true
    },

} , { collection: "users_data" });

// Make Model for user Schema
let User = mongoose.model('User' , usersSchema);

export default User;