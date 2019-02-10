const mongoose =  require('mongoose');
const contactSchema = mongoose.model('contact');
const cryptoService = require('./../services/crypto');
module.exports = {
  async saveContactInfo(req,res){
    try{
      let data = req.body;
      console.log(data);
      let contact = {};
      for(let key in data){
        contact[key] = cryptoService.encrypt(data[key]);
      }
      console.log(contact);
      const contactItem = new contactSchema(contact);
      await contactItem.save();
      delete data['password'];
      res.status(201).send({success:true,contact:data});
    }catch(e){
      console.log(e);
      res.status(500).send({success:false,error:{message:'Something went wrong'}});
    }
  },
  async getContacts(req,res){
    try{
      let contacts = await contactSchema.find({}).lean();
      contacts = contacts.map((contact)=>{
        for(let key in contact){
          if(key !== '_id'){
            contact[key] = cryptoService.decrypt(contact[key]);
          }
        }
        return contact;
      })
      res.status(200).send({success:true,contacts});

    }catch(e){
      res.status(500).send({success:false,error:{message:'Something went wrong'}});

    }
  }
}
