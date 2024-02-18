import { Schema, models, model } from "mongoose";


const categorySchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    image_url: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: false,
    versionKey: false,
});

export default models.category || model('category', categorySchema);