import { model, modelNames, models, Schema } from "mongoose";

const SubproductSchema = new Schema({
    type: {
        type: String,
        required: true,
        enum: ["bar", "case"],
    },
    price: {
        type: Number,
        required: true,
    },
});

const ProductSchema = new Schema(
    {
        sub_products: [SubproductSchema],
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image_url: {
            type: [String],
            required: true,
            default: [],
        },
        nutrition_information: {
            type: String,
            required: true,
        },
        total_quantity: {
            type: Number,
            required: true,
            min: 0,
            max: 50,
        },
        product_status: {
            new_product: { type: Boolean, default: false, required: true },
            sold_product: { type: Boolean, default: false, required: true },
            most_sale: { type: Boolean, default: false, required: true },
        },
    },
    {
        timestamps: true, // Add createdAt and updatedAt timestamps
        versionKey: false,
    }
);

export default models.product || model("product", ProductSchema);
