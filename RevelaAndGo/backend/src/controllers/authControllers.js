const passport = require('passport');
const jwt = require('jsonwebtoken');

let refreshTokens = [];

const registerUser = async (req, res) => {
  res.send({
    user: req.user,
    message: 'Registered successfully'
  });
};

const loginUser = async (req, res, done) => {
  passport.authenticate(
    'login',
    async (err, user) => {
      try {
        if (err || !user) {
          const error = new Error('An error occurred.');

          return done(error);
        }

        return req.login(
          user,
          { session: false },
          async (error) => {
            if (error) return done(error);

            // eslint-disable-next-line no-underscore-dangle
            const data = { _id: user._id, email: user.email };

            const token = jwt.sign(
              { user: data },
              process.env.JWT_SECRET,
              { expiresIn: '15m' }
            );
            const refreshToken = jwt.sign(
              { user: data },
              process.env.JWT_SECRET
            );

            refreshTokens.push(refreshToken);

            return res.json({
              user,
              token,
              refreshToken
            });
          }
        );
      } catch (error) {
        return done(error);
      }
    }
  )(req, res, done);
};

const tokenUser = (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.sendStatus(401);
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  return jwt.verify(refreshToken, process.env.JWT_SECRET, (err, { user }) => {
    if (err) {
      return res.sendStatus(403);
    }

    // eslint-disable-next-line no-underscore-dangle
    const data = { _id: user._id, email: user.email };

    const token = jwt.sign(
      { user: data },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }
    );

    return res.json({
      token
    });
  });
};

const logoutUser = (req, res) => {
  const { refreshToken } = req.body;
  refreshTokens = refreshTokens.filter((current) => current !== refreshToken);

  res.send('Logout successfully');
};

module.exports = {
  registerUser,
  loginUser,
  tokenUser,
  logoutUser
};
