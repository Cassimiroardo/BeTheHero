const express = require('express')
const routes = express.Router()

const ongs      = require('./controllers/ongs.controller')
const incidents = require('./controllers/incidents.controller')
const auth      = require('./controllers/auth.controller')

routes.post('/auth', auth.login)

routes.get ('/ongs', ongs.index)
routes.post('/ongs', ongs.store)

routes.get   ('/incidents',     incidents.index)
routes.get   ('/all-incidents', incidents.indexMany)
routes.post  ('/incidents',     incidents.store)
routes.delete('/incidents/:id', incidents.delete)

module.exports = routes