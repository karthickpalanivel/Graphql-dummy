import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
    foundationName: { type: String },
    domain: { type: String },
    category: { type: String },
    projectName: { type: String },
    description: { type: String },
    projectGithub: { type: String },
    projectTwitter: { type: String },
    deadline: { type: String },
    rewards: { type: Number, default: 0 },
    milestone: { type: String },
    shares: { type: Number, default: 0 },
},
{
    timestamp: true,
},
);

export default model('projects', projectSchema)
