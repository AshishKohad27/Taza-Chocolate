import { Schema, model, models } from "mongoose";

type authTypescript = {
  first_name: String;
  last_name: String;
  email: String;
  password: String;
  role: String;
};

const authSchema = new Schema<authTypescript>({
  first_name: { type: String, required: true, },
  last_name: { type: String, required: true, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["admin", "guest"],
    default: "guest",
  },
});

export default models.auth || model<authTypescript>("auth", authSchema);
