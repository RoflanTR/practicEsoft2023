const {Router} = require('express')
const auth = require('../middleware/auth')
const router = Router()

router.get('/', auth, async (req, res) => {
    res.render('history', {
      title: 'Главная страница',
        isHistory: true
    })
  })
  module.exports = router
