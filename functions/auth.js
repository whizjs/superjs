const {
  OAuth2Client
} = require('google-auth-library');

const googleAppId = '820664319776-kratepkqp0lnq1kgsk6ob34pc7u3meug.apps.googleusercontent.com';
const googleAppKey = 'aBDbuxOOAFYJN3q5CdXpvj7_';
const googleCallback = 'https://superjs.org/oauth/google';


exports.handler = function (event, context, callback) {
  const parsedPathArr = event.path.split('/');
  if (parsedPathArr[parsedPathArr.length - 2] === 'google') {
    const oauth2Client = new OAuth2Client(googleAppId, googleAppKey, googleCallback)
    if (parsedPathArr[parsedPathArr.length - 1] === 'callback') {
      oauth2Client.getToken(event.queryStringParameters.code).then((res) => {
        const profileUrl = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json';
        // res.tokens 需要保存在服务器，不能返回给用户
        oauth2Client.setCredentials(res.tokens);
        oauth2Client.request({
          url: profileUrl
        }).then(res => {
          callback(null, {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
              "Cache-Control": "public, max-age=0, must-revalidate"
            },
            body: JSON.stringify(res.data)
          })
        }).catch(err => console.log(err));
      }).catch(err => console.log(err));
    }
  } else {
    callback(null, {
      statusCode: 200,
      body: ''
    });
  }
}