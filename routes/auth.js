const { Router } = require('express')
const router = Router()
const Users = require('../models/users')
const Player = require('../models/listPlayer')

router.get('/', async (req, res) => {
    res.render('auth', {
        layout: "empty",
        title: 'Главная страница',

    })
})
router.post('/', async (req, res) => {
    const dataUsers = await Users.auth(req.body.login);
    if (dataUsers != 'empty') {
        if (dataUsers.password == req.body.pass) {
            req.session.user = `${dataUsers.lastName} ${dataUsers.name} ${dataUsers.Otchestvo}`
            req.session.userId = `${dataUsers.id}`
            req.session.isAuth = true;

            Player.listPlayerSocket(dataUsers.id,req.session.user,dataUsers.Otchestvo,1)
            console.log(Player.list)



            req.session.save(err => {
                if (err) throw err
                res.redirect('/')
            })
            
        }
        else {
            req.session.isAuth = false;
            res.render('auth', {
                layout: "empty",
                title: 'Главная страница',
                fail: true
            })
        }
    }
    else {
        req.session.isAuth = false;
        res.render('auth', {
            layout: "empty",
            title: 'Главная страница',
            fail: true
        })
    }





})

module.exports = router
