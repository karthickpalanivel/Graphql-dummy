import Contributor from '../models/db-models/contributors.js';

export default {
    Query: {
        
        getAllContributor: async (_, __, ___) => Contributor.find(),
        
        getAllContributorByVerification: async (_, {
            popular,
        }, ___) => Contributor.find({ popular: true }),
        
        getAllContributorByRole: async (_, { role }, ___) => {
            try {
                const roles = await role.find({ role: { $regex: new RegExp(`(^|,)${role}(,|$),'i`) } });
                return roles;
            } catch (error) {
                console.log(error);
                return {
                    message: 'Something went wrong',
                    res: false,
                }
            }
        },

        Mutation: {
            createContributor: async (_, {
                name,
                role,
                specialized,
                contributorGithub,
                contributorTwitter,
                email,
            }, ___) => {
                try {
                    const newContributor = await contributor.create({
                        name,
                        role,
                        specialized,
                        contributorGithub,
                        contributorTwitter,
                        email,
                    });   if (newContributor) {
                        return {
                            contributor: newContributor,
                            messsage: 'Profile created Successfully',
                            res: true
                        }
                    }
                    return {
                        message: 'Failed to create Profile',
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
            updateContributor: async(_, {
                name,
                role,
            }, ___) => {
                try {
                    const updateContributor = await Contributor.findOneAndUpdate({
                        name,
                        role
                    })
                    if (updateContributor) {
                        return {
                            contributor: updateContributor,
                            res: true,
                            message: 'Profile updated successfully'
                        };
                    }
                    return {
                        message: 'unable to update profile',
                        res: false
                    }
                } catch (error) {
                    console.log(error);
                    throw (error);
                }
            },

            deleteContributor: async (_, { walletAddress }) => {
                try {
                    const deleteProfile = await Contributor.findByIdandDelete(walletAddress);

                    if (deleteProfile) {
                        return {
                            message: 'Profile Deleted Successfully',
                            res: true
                        }
                    };
                    return {
                        message: "Profile not found",
                        res: false
                    }
                } catch (error) {
                    console.log(error)
                    
                    return {
                        message: 'Something went wrong',
                        res: false
                    }
                };
            }
        }
    }
}