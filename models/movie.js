import mongoose, { Schema } from 'mongoose';

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

export default mongoose.model('movie', movieSchema);
