export default `
    type Contributor{
        wallentAddress: String,
        name: String,
        role: String,
        specialized: [String]
        commitCount: String,
        activeProjects: String,
        contributorGithub: String,
        contributorTwitter: String,
        email: String,
        verification: Boolean
    }

    type ContributorsResponse{
        contributor: Contributor,
        message: String,
        res: Boolean!
    }

    type Query{
        getAllContributor: [Contributor],
        getAllContributorByRole: [Contributor.Role],
        getAllContributorByVerfication (verification: true):[Contributor],
    }

    type Mutation{
        
        createContributor(
            name: String,
            role: String,
            contributorSpecialized: [String]
            commitCount: String,
            activeProjects: String,
            contributorGithub: String,
            contributorTwitter: String,
            contributorEmail: String,
        ): ContributorResponse
        
        
        updateContributor(id: ID!)(
            name: String,
            role: String,
            contributorSpecialized: [String],
            contributorTwitter: String
        ): ContributorResponse


        deleteContributor(name: String!): ContributorResponse

    }
`;