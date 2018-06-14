import mongoose, { Schema } from 'mongoose';

// Define movie schema
var userSchema = new Schema({
  username: String,
  email: String,
});

// Export Mongoose model
export default mongoose.model('user', userSchema);
