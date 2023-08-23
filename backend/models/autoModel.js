const mongoose = require ("mongoose");

const { Schema } = mongoose; 

const autoModel = new Schema(
  {
    make: { type: String },
    model: { type: String },
    year: { type: Number },
    mileage: { type: Number },
    price: { type: Number },
  }
);

module.exports = mongoose.model('Autos', autoModel);