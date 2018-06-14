import express, { Router } from 'express';
// Import index action from movies controller
import { save } from './controllers/movies';
var bodyParser = require('body-parser')

// Initialize the router
const router = Router();

router.use(bodyParser.urlencoded({
    extended: true
}));

router.use(bodyParser.json());

router.route('/movie/save')
  .post(save)
  .get(function (req, res) {
      res.json({message: 'First memory'});
  });

export default router;
