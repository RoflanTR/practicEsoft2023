const { Router } = require('express')
const auth = require('../middleware/auth')
const router = Router()
const Player = require('../models/listPlayer');

router.get('/', auth, async (req, res) => {
  res.render('startPage', {
    title: 'Главная страница',
    isHome: true,
    user: req.session.user
  })
})
router.get('/playOnline', async (req, res) => {

  res.render('playingField', {
    title: "Онлайн",
    isHome: true, 
    mode: true,
    user1: req.session.user,
    
  })
})
router.post('/play', async (req, res) => {

  res.render('playingField', {
    title: req.body.title,
    isHome: true,
    user1: req.session.user,
    user2: req.body.name,
    choice: JSON.parse(req.body.choice),
    // mode: JSON.parse(req.body.mode),
    mode: false
  })
})

router.post('/logout', async (req, res) => {
  for (let i = 0; i < Player.list.length; i++) {
    if (Player.list[i].name === req.session.user) {
      Player.list.splice(i, 1);
      i--;
    }
  }
  
  req.session.destroy(() => {
    res.redirect('/auth')
  })

})
module.exports = router
