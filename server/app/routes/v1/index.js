

module.exports = function(router){
  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  require('./social_app')(router);
  require('./profile')(router);
  return router;
}
