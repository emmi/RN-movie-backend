import express, { Router } from 'express';
// Import index action from movies controller
import { index } from './controllers/movies';
import User from './models/user';

// Initialize the router
const router = Router();

// Handle /movies.json route with index action from movies controller
router.route('/movies.json')
  .get(index);

const example = {
  username: 'emmmi',
  email: 'emmi@siieretonen.me',
};

router.route('/save')
  .post(function (req, res) {
    console.log('moi');
      let user = new User(example);
      user.save().then(() => { console.log('tallennettu'); });

      res.json({message: 'Saving a user was successful!'});
  })
  .get(function (req, res) {
    console.log('hei');

      res.json({message: 'First memory'});
  });

export default router;
