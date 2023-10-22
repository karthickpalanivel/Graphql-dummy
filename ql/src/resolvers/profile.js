import Profile from '../models/db-mobels/profile'

export default {
    Query: {
        getAllProfile: async (_, __, ___) => Profile.find(),
        getProfile: async (_, { id }, ___) => Profile.findById(id),
    },
    Mutation: {
        createProfile: async(_, {
            walletAddress,
            username,
            displayImage,
            email,
            verification,
        }, __) => {
            try {
                const newProfile = await Profile.create({
                    walletAddress,
                    username,
                    displayImage,
                    email,
                    verification,
                });
                if (newProfile) {
                    return {
                        profile: newProfile,
                        message: 'Profile Created Successfully',
                        res: true,
                    };
                }
                return {
                    message: 'Failed to create an ID'
                };
            }
            catch (error) {
                console.log(error);
                return {
                    message: 'Something went wrong',
                    res: false,
                }
            }
        },

        updateProfile: async(_, {
            Profile,
            id,
            username,
            displayImage,
        }, ___) => {
            try {
                const updateProfile = await Profile.findOneAndUpdate(
                    { id },
                    {
                        username,
                        displayImage
                    },
                    { new: true },
                );
                if (updateProfile) {
                    return {
                        Profile: updateProfile,
                        res: true,
                        message: 'Profile updated Successfully'
                    };
                }
                return {
                    message: "Couldn't find the Profile",
                };
            } catch(error) {
                console.log(error)
                throw (error);
            }
        }, 

        deleteProfile: async (_, { id }) => {
            try {
                const deleteProfile = await Profile.findByAndDelete(id);

                if (deleteProfile) {
                    return {
                        message: 'Profile Deleted Successfully',
                        res: true,
                    }
                };

                return {
                    message: 'Profile not found',
                    res: false,
                };
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