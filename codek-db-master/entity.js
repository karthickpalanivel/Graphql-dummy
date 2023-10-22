import { Schema, model } from 'mongoose';


const EntitySchema = new Schema({
    foundationName: { type: String },
    activeProject: { type: String },
    milestoneLeft: { type: String },
    officialSite: { type: String},
    entiryGithub: { type: String },
    entityTwitter: { type: String },
    verification: { type: Boolean, default: false },
},
{
    timestamp: true,
},
);

export default model('entity', EntitySchema)