import { Schema, model, connect, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IUser {
  //coté js
  _id : Types.ObjectId;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  roles : Types.ObjectId[];

}

// 2. Create a Schema corresponding to the document interface.
//coté bdd
const userSchema = new Schema<IUser>({

  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  roles : [{
    type: Schema.Types.ObjectId,
    ref: 'Role'
  }]
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);

export default User;