import express, { Router } from 'express';
// Import index action from movies controller
import { save } from './controllers/movies';
var bodyParser = require('body-parser')
import Movie from './models/movie';


// Initialize the router
const router = Router();

router.use(bodyParser.urlencoded({
  extended: true
}));

router.use(bodyParser.json());

router.route('/movies/save')
.post(save)
.get(function (req, res) {
  res.json({message: 'First memory'});
});

router.route('/movies/')
.get(function (req, res) {

  // console.log('hölll');
  // var coll = req.db.get('movies');

  var query =  Movie.find({});

  query.exec(function (err, movies) {
    if (err) return handleError(err);

    console.log('movies ' + JSON.stringify(movies));
    res.json({movies: movies});
    // athletes contains an ordered list of 5 athletes who play Tennis
  })
});

export default router;
