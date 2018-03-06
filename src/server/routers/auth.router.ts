import * as express from 'express';
import passport from '../auth/passport';

const router = express.Router();

const authenticateGoogle = passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ],
});

router.get('/auth/google', authenticateGoogle);

export default router;
