import { Schema, model, models } from "mongoose";

type authTypescript = {
  name?: String;
  email: String;
  password: String;
  role: String;
};

const authSchema = new Schema<authTypescript>({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "guest"],
    default: "guest",
  },
});

export default models.auth || model<authTypescript>("auth", authSchema);
