import Entity from '../models/db-models/entity';

export default {
    Query: {
        getAllEntity: async (_, __, ___) => Entity.find(),
        
        getAllPopularEntity: async (_, __, __) => Entity.find({ popular: true }),
        
        getAllEntityDomain: async (_,domain,___) => Entity.find({ domain }),
        
        getAllEntityCategory: async (_, category, ___) => Entity.find({ category: category }),
        
        getAllEntityActiveProject: async (_,activeProject,___) => Entity.find({ activeProject })
    },

    Mutation: {
        createEntity: async(_, {
            entityName,
            entityTwitter,
            officialSite,
            popular,
        }, ___) => {
            try {
                const newEntity = await Entity.create({
                    entityName,
                    entityTwitter,
                    officialSite,
                    popular
                });
                if (newEntity) {
                    return {
                        Entity: newEntity,
                        message: 'Entity Created Successfully',
                        res: true,
                    };
                }
                return {
                    message: 'Failed to create Entity',
                    res: false
                }
            } catch (error) {
                console.log(error);
                return {
                    message: 'something went wrong',
                    res: false
                }
            }
        },

        updateEntity: async (_, {
            activeProject, 
            milestone,
        }, ___) => {

            try {

                const updateEntity = await Entity.findOneAndUpdate({
                    activeProject,
                    milestone,
                
                },
                );
                
                if (updateEntity) {
                    return {
                        Entity: updateEntity,
                        res: true,
                        message: 'Foundation updated successfully'
                    };
                }
                return {
                    message: "Couldn't able Update",
                    res: false
                };
            } catch (error) {
                console.log(error)
                throw (error);
            }
        },

        deleteEntity: async (_, { id }) => {
            try {
                const deleteEntity = await Entity.findByIdAndDelete(id);

                if (deleteProfile) {
                    return {
                        message: 'Entity deleted Successfully',
                        res: true
                    }
                };
                return {
                    message: 'Entity not Found',
                    res: false
                }
            }
            catch (error) {
                console.log(error);
                return {
                    message: 'Something went wrong',
                    res: false,
                };
            }
        }
    }
}