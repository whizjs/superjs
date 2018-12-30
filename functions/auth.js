var Request = require('request');
exports.handler = function (event, context, callback) {
    Request({
        method: 'post',
        url: 'https://accounts.google.com/o/oauth2/token',
        form: {
            // code: req.body.code,
            client_id: "820664319776-kratepkqp0lnq1kgsk6ob34pc7u3meug.apps.googleusercontent.com",
            client_secret: "aBDbuxOOAFYJN3q5CdXpvj7_",
            redirect_uri: "http://localhost:8080/oauth/google",
            grant_type: 'authorization_code'
        },
        headers: {
            'Allow-Control-Allow-Origin': "*",
            'content-type': 'application/x-www-form-urlencoded'
        }
    }, function (err, response, body) {
        try {
            if (!err && response.statusCode === 200) {
                callback(null, {
                    statusCode: 200,
                    body: body
                });
            } else {
                callback('error' + JSON.stringify(err));
            }
        } catch (e) {
            callback('error' + JSON.stringify(e));
        }
    })
}