const mongoose = require('mongoose');
require('dotenv').config();

// const isProd = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/googlebooks'

mongoose.connect(
 'mongodb://localhost/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
  }
);

module.exports = mongoose.connection;
