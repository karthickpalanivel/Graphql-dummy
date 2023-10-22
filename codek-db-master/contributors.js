import { Schema, model } from 'mongoose';

const ContributorSchema = new Schema(
    {
        role: { type: String },
        specialized: { type: [String] },
        commitCount: { type: String },
        activeProjectList: { type: String },
        contributorGithub: { type: String },
        contributorTwitter: { type: String },
        verification: {type: Boolean, default: false},
    },
    {
        timestamp: true,
    },
);

export default model('contributors', ContributorSchema);