var express = require('express');

import { Router } from "express";

import { add, getOne, getAll, destroy } from "./controllers/order";
const { auth } = require('./middleware/auth');

var orderRouter: Router = express.Router();

orderRouter.get('/', getAll);
orderRouter.get('/:id', getOne);
orderRouter.post('/', auth, add);
orderRouter.delete('/:id', auth, destroy);

export {
    orderRouter
}
