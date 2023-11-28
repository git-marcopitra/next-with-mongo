import mongoose from 'mongoose';

const MODEL_NAME = 'User';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  // Add other fields as needed
});

const User = mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, userSchema);

export default User;
