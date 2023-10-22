import { Schema, model } from 'mongoose';

const ProfileSchema = new Schema(
    {
        walletAddress: { type: String, unique: true },
        handleName: { type: String, required: true },
        displayImage: { type: String, required: true },
        email: { type: String, required: true },
        entity: { type: Boolean, default: false },
        contributor: {type: Boolean, default: false},
    },
    {
        timestamps: true,
    },
);

export default model('profiles', ProfileSchema);
