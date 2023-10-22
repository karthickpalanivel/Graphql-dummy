export default `
    type Project{
        projectId: String,
        entityName: String!,
        domain: String!,
        category: String!,
        projectName: String!,
        gitRepo: String!,
        projectTwitter: String,
        deadline: String,
        rewards: String,
        milestone: String!,
        shares: String,
    }

    type ProjectResponse{
        project: Project,
        message: String!
        res: Boolean!
    }

    type Query{
        getAllProjects: [Project]
        getAllCategory: [Project.category]
        getAllDomain: [Project.domain]
    }

    type Mutation{
        createProject(
            entityName:String!,
            domain:String!,
            category:String!,
            projectName:String!,
            gitRepo:String!,
            milestone: String!
        ): RewardResponse
        updateProject(
            projectId: String!,
            gitRepo: String!,
            projectTwitter: String,
            deadline: String,
            rewards: String,
            milestone: String,
            shares: String,
        )
        deleteProject(
            ProjectId:String!
        ): ProjectResponse
    }
`;