const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/associationsExample';

mongoose.connect(url, err => {
  if (err) {
    console.log("# Failed to connect to MongoDB ");
  } else {
    console.log('# Connected to MongoDB', url)
  }
})
