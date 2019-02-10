const socialAppController = require('./../../controllers/social_app');
module.exports = function(router){

  router.get('/get-linkedIn-user',socialAppController.getLinkedinUser);
}
