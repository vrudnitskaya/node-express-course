const Task = require('../models/Task');

const getAllTasks = (req, res) => {
    try{
        res.send('get all tasks');
    } catch (err){
        res.status(500).json({ msg: err });
    }
    
};

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    } catch(err) {
        res.status(500).json({ msg: err });
    }
};

const getTask = (req, res) => {
    try {
        res.json({id:req.params.id});
    } catch (err) {
        res.status(500).json({ msg: err });
    }
};

const updateTask = (req, res) => {
    try {
        res.send('update task');
    } catch (err) {
        res.status(500).json({ msg: err });
    }
};

const deleteTask = (req,res) => {
    try {
        res.send('delete task');
    } catch (err) {
        res.status(500).json({ msg: err });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
};