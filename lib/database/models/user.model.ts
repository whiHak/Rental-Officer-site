import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Add other user fields as needed
}, {
  timestamps: true
});

const User = models.User || model("User", UserSchema);
export default User; 