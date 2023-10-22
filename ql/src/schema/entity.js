export default `

    type Entity{
        id: String,
        entityName: String,
        activeProjectList: String,
        milestoneLeft: String,
        officialSite: String,
        entityGithub: String,
        entityTwitter: Sting,
        verification: Boolean,
        popular: Boolean
    }

    type EntityResponse{
        entity: Entity
        message: String! 
        res: Boolean!
    }

    type Query{
        getAllEntity: [Entity]
        getAllEntityByDomain: [Entity.domain]
    }
    
    type Mutation{
        createEntity(
            entityName: String,
            activeProject: String,
            milestoneLeft: String,
            officialSite: String,
            entityGithub: String,
            entityTwitter: String,
            verification: Boolean
       
        ): EntityResponse    
    }
`;