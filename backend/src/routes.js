const express = require('express');
const routes = express.Router();
const OngController = require('./controllers/OngController');
const IcidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController'); 

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);
routes.post('/incidents', IcidentController.create);
routes.get('/incidents', IcidentController.index);
routes.delete('/incidents/:id', IcidentController.delete);
routes.get('/profile', ProfileController.index);
routes.post('/session', SessionController.create);


module.exports = routes;