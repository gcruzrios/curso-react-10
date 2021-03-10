/*
    Event Routes host + /api/events
*/
const { Router } = require('express')
const { check } = require('express-validator');
const { validarCampos} = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt')
const { getEventos,crearEvento, actualizarEvento, eliminarEvento} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');
const router = Router();

// todas tienen que pasar por la validación del JWT
router.use(validarJWT);

// obtener eventos

router.get('/', getEventos);

//crear Eventos

router.post(
    '/',
    [
       check('title','El titulo es obligatorio').not().isEmpty(),
       check('start','Fecha de inicio es obligatorio').custom(isDate),
       check('end','Fecha final es obligatorio').custom(isDate),
       validarCampos
    ],
    crearEvento
);

//Actualizar Eventos

router.put(
    '/:id', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatorio').custom(isDate),
        check('end','Fecha final es obligatorio').custom(isDate),
        validarCampos
    ],
    actualizarEvento);

//Borrar evento

router.delete('/:id', eliminarEvento)

module.exports = router;