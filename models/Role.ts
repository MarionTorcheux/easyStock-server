import { Schema, model, connect, Types } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface IRoles {
    //coté js
    _id : Types.ObjectId;
    label : string;
    permissions : Types.ObjectId[];
}

// 2. Create a Schema corresponding to the document interface.
//coté bdd
const roleSchema = new Schema<IRoles>({

    label: { type: String, required: true },
    permissions : [{
        type: Schema.Types.ObjectId,
        ref: 'Permission'
    }]
});

// 3. Create a Model.
const Role = model<IRoles>('Role', roleSchema);

export default Role;