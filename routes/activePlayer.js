const { Router } = require('express')
const auth = require('../middleware/auth')
const router = Router()
const Player = require('../models/listPlayer')






router.get('/', auth, async (req, res) => {
  res.render('test', {
    title: 'Активные игроки',
    isActivePlayer: true,
    listPlayers: Player.list,
    userId: req.session.userId
    
  })
  
})
module.exports = router