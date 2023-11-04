import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   number: {
      type: String,
      requied: true,
      unique: true,
   },
   email: {
      type: String,
   },
   fullName: {
      type: String,
   },
   shipping: {
      address01: {
         type: String
      },
      address02: {
         type: String
      },
      city: {
         type: String
      },
      pincode: {
         type: Number
      },
      state: {
         type: String
      },
   },
   orders: {
      type: Array
   }

});

export default mongoose.model("User", UserSchema);