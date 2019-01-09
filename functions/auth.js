const { OAuth2Client } = require('google-auth-library');

const googleAppId = '1073861298966-tcc0mciibfhta1b27hhcv489pff5hn8i.apps.googleusercontent.com';
const googleAppKey = 'PGB-2cXgBHDtmnVKFR19B1xl';
const googleCallback = 'http://harlanluo.cf:8080/google-oauth-callback.html';


exports.handler = function (event, context, callback) {
  const pathes = event.path.split('/');
  if (pathes[2] === 'google') {
    const oauth2Client = new OAuth2Client(googleAppId, googleAppKey, googleCallback)
    if (pathes[3] === 'callback') {
      oauth2Client.getToken(event.queryStringParameters.code).then((res) => {
        const profileUrl = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json';
        // res.tokens 需要保存在服务器，不能返回给用户
        oauth2Client.setCredentials(res.tokens);
        oauth2Client.request({ url: profileUrl }).then(res => {
          callback(null, {
            statusCode: 200,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(res.data)
          })
        })

      })
    }
  } else {
    callback(null, {
      statusCode: 200,
      body: 'empty2'
    });
  }
}
