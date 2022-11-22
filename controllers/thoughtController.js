const Thoughts = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thoughts.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Get a single thought
  getSingleThoughts(req, res) {
    Thoughts.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((thoughts) =>
        !thoughts
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new thoughts
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  // Delete a thoughts and associated apps
  deleteThoughts(req, res) {
    Thoughts.findOneAndDelete({ _id: req.params.thoughtsId })
      .then((thoughts) =>
        !user
          ? res.status(404).json({ message: 'No thoughts with that ID' })
          : Application.deleteMany({ _id: { $in: user.applications } })
      )
      .then(() => res.json({ message: 'Thoughts and associated apps deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
};