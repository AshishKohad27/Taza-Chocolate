import { Schema, model, models } from "mongoose";

type productTypescript = {
  title: String;
  image: String;
  description: String;
  price: Number;
  quantity: Number;
};

const productSchema = new Schema<productTypescript>({
  title: { type: String, require: true },
  image: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  quantity: { type: Number, require: true },
});

export default models.product ||
  model<productTypescript>("product", productSchema);
