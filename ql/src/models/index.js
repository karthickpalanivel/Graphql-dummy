import mongoose from 'mongoose';

const URI = 'mongodb+srv://sathish:msk@msk.sxiew.mongodb.net/codek?retryWrites=true&w=majority';

const db = async (uri) => {
  try {
    await mongoose.connect(uri || URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default db;
