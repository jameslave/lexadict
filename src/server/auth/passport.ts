import * as passport from 'passport';
import { OAuth2Strategy as GoogleStrategy } from 'passport-google-oauth';
import userModel from '../../db/models/user.model';

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `${process.env.URL}/auth/google/callback`,
  },
  async (token, refreshToken, profile, next) => {
    try {
      const existingUser = await userModel.findOne({ id: profile.id });

      if (existingUser) {
        return next(null, existingUser);
      }

      const newUser = await userModel.create({
        id: profile.id,
        name: profile.displayName,
        email: profile.emails[0].value,
        photoUrl: profile.photos[0].value,
      });

      return next(null, newUser);
    } catch (error) {
      console.error(error);
      return next(error);
    }
  },
));

export default passport;
