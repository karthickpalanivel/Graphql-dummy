import { Schema, model } from 'mongoose';

const ContributorSchema = new Schema(
    {
        Name: { type: String, required: true, unique: true },
        contributorEmail: {type: String, required: true},
        Role: { type: String },
        ContributorSpescialized: {type: [String]},
        domain:{type: String},
        commitCount: { type: String },
        activeProjects: { type: String },
        contributorGithub: { type: String },
        contributorTwitter: { type: String },
        verification: { type: Boolean }
    },
    {
        timestamp: true,
    },
);

export default model('contributors', ContributorSchema);