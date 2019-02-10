const contactController = require('./../../controllers/contact');
module.exports = function(router){
  router.get('/contacts',contactController.getContacts);

  router.post('/store-info',contactController.saveContactInfo);
}
