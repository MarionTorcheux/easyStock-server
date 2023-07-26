import { Schema, model, Types, connect } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IPermission {
    _id : Types.ObjectId;
    label : string;
}

// 2. Create a Schema corresponding to the document interface.
//coté bdd
const permissionSchema = new Schema<IPermission> ({
    label: { type: String, required: true }
});


// 3. Create a Model.
const Permission = model<IPermission>('Permission', permissionSchema);

export default Permission;