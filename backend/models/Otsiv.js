import { Schema, model } from "mongoose"


const Otsiv = new Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    }
});

export default model('Otsiv', Otsiv);