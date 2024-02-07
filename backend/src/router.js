const express = require('express')
const router = express.Router();
const taksController = require('./controllers/tasksControlller')
const tasksMiddleware = require('./middlewares/tasksMiddlewares')

router.get('/tasks', taksController.getAll)
router.post('/task',tasksMiddleware.validateFieldTitle, taksController.createTask)
router.get('/task/:id', taksController.getOneTask)
router.delete('/task/:id', taksController.deleteTask)
router.put('/task/:id',
  tasksMiddleware.validateFieldTitle,
  tasksMiddleware.validateFieldStatus, 
  taksController.updateTask
);

module.exports = router