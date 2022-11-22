const { connect, connection } = require('mongoose');

connect('mongodb://localhost/socialapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
