const tasksModel = require('../models/tasksModel')

const getAll = async (req, res )=>{
  const tasks = await tasksModel.getAll()
  return res.status(200).json(tasks)
}

const createTask = async (req, res)=>{
  const task = await tasksModel.createTask(req.body)
  return res.status(200).json(task)
}

const getOneTask = async (req, res)=>{
  const { id } = req.params
  const task = await tasksModel.getOneTask(id)
  return res.status(200).json(task)
}

const deleteTask = async (req, res)=> {
  const { id }= req.params

  await tasksModel.deleteTask(id)
  return res.status(200).json()
}

const updateTask = async (req, res) => {
  const { id }= req.params

  await tasksModel.updateTask(id, req.body)
  return res.status(200).json({ message: 'Task updated'})

}



module.exports = {
  getAll,
  getOneTask,
  createTask,
  deleteTask,
  updateTask
}