const express = require('express');

const OngController = require('../modules/ongs/OngController');
const IncidentsController = require('../modules/incidents/IncidentController');
const ProfileController = require('../modules/profiles/ProfileController');
const SessionsController = require('../modules/sessions/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionsController.create);

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

module.exports = routes;
