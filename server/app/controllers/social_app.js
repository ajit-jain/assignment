const linkedInClient = require('./../services/oauth2');

module.exports = {
  async getLinkedinUser(req,res){
    try{
      const client = new linkedInClient();
      const data = await client.getOauthUser(req.query.authCode);
      res.status(200).send({success:true,data});

    }catch(e){
      console.log(e);
      res.status(500).send({success:false,error:{message:'Something went wrong'}});
    }
  }
}
