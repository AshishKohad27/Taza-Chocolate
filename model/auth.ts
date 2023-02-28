import { Schema, model, models } from "mongoose";

type authTypescript = {
  name: String;
  email: String;
  password: String;
};

const authSchema = new Schema<authTypescript>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const authModel = model<authTypescript>("auth", authSchema);

export default models.auth || authModel;
