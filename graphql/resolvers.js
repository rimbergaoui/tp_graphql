const Task = require("../models/Task");

const taskResolver = {
  Query: {
    task: async (_, { id }) => {
      return await Task.findById(id);
    },
    tasks: async () => {
      return await Task.find();
    },
  },
  Mutation: {
    addTask: async (_, { title, description, completed, duration }) => {
      const newTask = new Task({
        title,
        description,
        completed,
        duration,
      });
      await newTask.save();
      return newTask;
    },
    completeTask: async (_, { id }) => {
      return await Task.findByIdAndUpdate(id, { completed: true }, { new: true });
    },
    changeDescription: async (_, { id, newDescription }) => {
      return await Task.findByIdAndUpdate(id, { description: newDescription }, { new: true });
    },
    deleteTask: async (_, { id }) => {
      await Task.findByIdAndDelete(id);
      return id;
    },
  },
};

module.exports = taskResolver;
