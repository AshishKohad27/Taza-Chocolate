import { Schema, model, models } from "mongoose";

const authSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['admin', 'manager', 'guest'],
        default: 'guest',
        required: true
    },
});

export default models.auth || model('auth', authSchema);