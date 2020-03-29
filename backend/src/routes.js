const express = require('express');

const { OngController, OngValidator } = require('./modules/ongs');
const {
  IncidentController,
  IncidentValidator
} = require('./modules/incidents');
const { ProfileController, ProfileValidator } = require('./modules/profiles');
const { SessionController, SessionValidator } = require('./modules/sessions');

const routes = express.Router();

routes.post('/sessions', SessionValidator.create(), SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngValidator.create(), OngController.create);

routes.get('/incidents', IncidentValidator.index(), IncidentController.index);
routes.post(
  '/incidents',
  IncidentValidator.create(),
  IncidentController.create
);
routes.delete(
  '/incidents/:id',
  IncidentValidator.delete(),
  IncidentController.delete
);

routes.get('/profile', ProfileValidator.index(), ProfileController.index);

module.exports = routes;
