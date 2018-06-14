import Movie from '../models/movie';

export const save = (req, res, next) => {
  let movie = new Movie(req.body);
  movie.save().then(() => { console.log('Movie saved'); });

  res.json({message: 'Saving a movie was successful!'});
};
