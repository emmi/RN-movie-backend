import mongoose, { Schema } from 'mongoose';

var movieSchema = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: String,
  release_year: Number,
  runtime: Number,
  genres: Array,
  status: String,
  overview: String,
  poster_path: String,
  vote_average: Number,
});

export default mongoose.model('movie', movieSchema);
