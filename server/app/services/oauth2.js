const request =  require('request-promise');
module.exports = class LinkedInClient {

  async getOauthUser(code) {

      let response = await this.getAccessToken(code);
      response = JSON.parse(response);
      if (response['error']) throw this.errorObject(response['error']);
      let userResponse = await this.getUser(response['access_token']);
      userResponse = JSON.parse(userResponse);
      if (userResponse['error']) throw this.errorObject(userResponse['error']);

      return userResponse;
  }
  getAccessToken(code) {
    let params = {
      code: code,
      client_id: process.env.LINKEDIN_CLIENT_ID,
      client_secret: process.env.LINKEDIN_CLIENT_SECRET,
      redirect_uri: process.env.LINKEDIN_REDIRECT,
      grant_type: 'authorization_code'
    }
    let url = "https://api.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code&code=" + params['code'] + "&redirect_uri=" + params['redirect_uri'] + "&client_id=" + params['client_id'] + "&client_secret=" + params['client_secret'];

    return request(url);
  }
  getUser(access_token){
    let url = `https://api.linkedin.com/v1/people/~:(email-address,first-name,last-name,date-of-birth,phone-numbers)?oauth2_access_token=${access_token}&format=json`
    return request(url);
  }
  errorObject(error){
    let err = new Error;
    err.code = error.code || '';
    err.message = error.message || error.error_description || '';
    err.type = error.type || '';
    return err;
  }

}
