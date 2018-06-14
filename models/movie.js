import mongoose, { Schema } from 'mongoose';

// Define movie schema
var movieSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: String,
  year: Number,
  runtime: Number,
  genres: Array,
  status: String,
  overview: String,
  posterPath: String,
  votes: Number,
});

// Export Mongoose model
export default mongoose.model('movie', movieSchema);
