let mongoose = require("mongoose");

// create a model class
let survey = mongoose.Schema(
  {
    
  },
  {
    collection: "survey",
  }
);

module.exports = mongoose.model("survey", survey);