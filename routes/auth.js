const router = require('express').Router();
const passport = require('passport');

const authCheck = (req, res, next) => {
  if (req.user) {
    res.redirect('/dashboard');
  } else {
    next();
  }
};

router.get('/login', authCheck, (req, res) => {
  res.render('login')
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  res.redirect('/dashboard')
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/auth/login')
})

module.exports = router