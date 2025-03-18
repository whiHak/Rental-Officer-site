import { model, models, Schema } from "mongoose";

<<<<<<< HEAD
export interface IUser extends Document {
    _id: string;
    clerkId: string
    email: string
    username:string
    firstName?:string
    lastName?:string
    photo?:string
  }
  
const UserSchema = new Schema({
    clerkId:{type: String, required:true, unique:true },
    email:{type:String, required: true, unique:true },
    username: {type: String, required:true, unique:true},
    firstName:{type:String},
    lastName: {type: String},
    photo: {type:String},
})

const User = models.User || model("User", UserSchema);
export default User
=======
const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Add other user fields as needed
}, {
  timestamps: true
});

const User = models.User || model("User", UserSchema);
export default User; 
>>>>>>> 0882c53cbf2467dc66111bcba5573c2a9f569bd4
