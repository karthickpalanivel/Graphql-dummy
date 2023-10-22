export default `
    type Profile{
        id: String,
        walletAddress: String
        username: String
        displayImage: String
        email: String
        verficiation: boolean
    }

    type profileResponse{
        profile: Profile
        message: String!
        res: Boolean!
    }

    type Query{
        getAllProfiles: [profile]
        getProfile(id: String!): Profile
    }

    type Mutation{
        createProfile(
            walletAddress: String,
            username: String,
            displayImage: String,
            email: String,
            verification: Boolean
            ): profileResponse
        deleteProfile(
            id: String!
        ): ProfileResponse
    }
`;