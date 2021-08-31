const passport = require('passport');
const JWTstrategy = require('passport-jwt');

passport.use(
  new JWTstrategy.Strategy(
    {
      secretOrKey: process.env.JWT_SECRET,
      jwtFromRequest: JWTstrategy.ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, next) => {
      try {
        return next(null, token.user);
      } catch (error) {
        return next(error);
      }
    }
  )
);
