import { model, modelNames, models, Schema } from "mongoose";


const CartSchema = new Schema(
    {
        customerId: {
            type: Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },
        productId: {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            default: 1,
            min: 1
        }

    },
    {
        timestamps: true, // Add createdAt and updatedAt timestamps
        versionKey: false,
    }
);

export default models.cart || model("cart", CartSchema);
