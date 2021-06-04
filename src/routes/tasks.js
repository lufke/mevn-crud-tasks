const express = require('express')
const router = express.Router();
const Task = require('../models/Task')

router.get('/', async (req,res)=>{
	const tasks = await Task.find()
	res.json(tasks)
})
	
router.post('/', async (req,res)=>{
	const nuevaTarea = new Task()
	await nuevaTarea.save()
	res.json({
		status: 'Tarea creada!'
	})

router.get('/:id', async()=>{})

router.put('/:id', async()=>{})

router.delete('/:id', async()=>{})
})



module.exports = router
