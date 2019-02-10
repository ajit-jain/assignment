const mongoose = require('mongoose');

let contactSchema = new mongoose.Schema({
  name:{
    type:String,
  },
  password:{
    type:String,
  },
  email:{
    type:String,
  }
});
contactSchema.set('toJSON', {
  getters: true, virtuals: false, transform: (doc, ret, options) => {
      delete ret.__v;
      delete ret.password;
      return ret;
  }
});

module.exports = mongoose.model('contact',contactSchema);
