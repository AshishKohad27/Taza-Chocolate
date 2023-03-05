import { Schema, model, models } from "mongoose";

type productTypescript = {
  title: String;
  description: String;
  bar: String;
  caseBar: String;
  image: String;
  category: String;
  quantity: Number;
  productId: String;
  userId: String;
};

const cartSchema = new Schema<productTypescript>({
  title: { type: String, require: true },
  description: { type: String, require: true },
  bar: { type: Number, require: true },
  caseBar: { type: Number, require: true },
  image: { type: String, require: true },
  category: { type: String, require: true },
  quantity: { type: Number, require: true },
  productId: { type: String, require: true },
  userId: { type: String, require: true },
});

export default models.cart || model<productTypescript>("cart", cartSchema); 
