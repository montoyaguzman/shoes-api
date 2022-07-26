
/**
 * Capa route, utilizada para el mapeo de los path
 */
const express = require('express');
const shoesRouter = express.Router();

const {
    get,
    getById,
    create,
    edit,
    editComplete,
    delet
} = require('../../controllers/shoes/');

// http://localhost:3000/shoes/
// Query Params: Filtrar información
// http://localhost:3000/shoes/?page=1&pageSize=10&brand=%22noke%22
// %20 => espacio en blanco
// %22 => comillas dobles
shoesRouter.get('/', get);

// Request Param: Son utilizados para ejecutar operaciones sobre un elemento especifico
// http://localhost:3000/shoes/999
shoesRouter.get('/:id', getById);

// http://localhost:3000/shoes/
// { id: 4, brand: 'pima', price: 600, size: 26 }
shoesRouter.post('/', create);

// PARTIAL EDITION: PATCH
shoesRouter.patch('/:id', edit);

// COMPLETE EDITION: PUT
shoesRouter.put('/:id', editComplete);

// DELETE: DELETE
shoesRouter.delete('/:id', delet);

module.exports = shoesRouter;