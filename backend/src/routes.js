const express = require('express');
const routes = express.Router();
const { celebrate, Segments, Joi } = require('celebrate');


const OngController = require('./controllers/OngController');
const IcidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController'); 


routes.get('/ongs', OngController.index);

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
         name: Joi.string().required(),
         email: Joi.string().required().email(),
         whatsapp: Joi.number().required().min(11),
         uf: Joi.string().required().length(2)
    })
}), OngController.create);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()

}), ProfileController.index);


routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object({
        page: Joi.number(),
    }),
}), IcidentController.index);

routes.post('/incidents', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown(),

    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required().min(8),
        value: Joi.number().required().min(1)
    }),

}), IcidentController.create);

routes.post('/sessions', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }),
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}), SessionController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), IcidentController.delete);


module.exports = routes;