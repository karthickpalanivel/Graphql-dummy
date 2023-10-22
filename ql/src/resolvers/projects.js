import Project from '../models/db-mobels/codek'

export default {
    Query: {
        getAllProject: async (_, __, ___) => Project.find(),
        
        getProjectByCategory: async (_, { category }, ___) => Project.find({ category }),

        getAllProjectDomain: async (_, { domain }, ___) => Project.find({ domain }),
        
        getProjectById: async (_, { id }) => Project.findOne({ _id: id }),
    },

    Mutation: {
        createProject: async (_, {
            projectName,
            entityName,
            domain,
            category,
            gitRepo,
            projectTwitter,
            deadline,
            rewards,
            milestone,
            shares
        }, __) => {
            try {
                const newProject = await Project.create({
                    projectName,
                    entityName,
                    domain,
                    category,
                    gitRepo,
                    projectTwitter,
                    deadline,
                    rewards,
                    milestone,
                    shares,
                });
                if (newProject) {
                    return {
                        project: Project,
                        message: 'Project created Successfully',
                        res: true
                    };
                }

                return {
                    message: 'Failed to create project',
                    res: false,
                };
            } catch (error) {
                console.log(error);
                return {
                    message: 'Something went wrong',
                    res: false,
                }
            }
        },

        updateProject: async (
            _,
            {
                projectName,
                projectTwitter,
                deadline,
                milestone,
                shares
            }, __
        ) => {
            try {
                const updateProject = await Project.fineOneandUpdate(
                    { projectName },
                    {
                        projectTwitter,
                        deadline,
                        milestone,
                        shares,
                    },
                    { new: true },
                );
                if (updateProject) {
                    return {
                        project: updateProject,
                        res: true,
                        message: 'Your Project Updated Successfully'
                    }
                }

                return {
                    message: 'Unable To Update Your project, Check once'
                };
            } catch (error) {
                console.log(error);
                throw (error);
            }
        },
               
        deleteProject: async (_, { id },) => {
            try {
                const deleteProject = await Project.findByIdAndDelete(id);

                if (deleteProject) {
                    if (deleteProject) {
                        return {
                            message: 'Project delete Successfully',
                            res: true
                        }
                    }
                    return {
                        message: 'Project Not Found'
                    }
                }
            } catch (error) {
                console.log(error);
                return {
                    message: 'Something went wrong',
                    res: false,
                };
            }
        },
    },
};