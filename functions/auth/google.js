const Request = require('request');

let google = function (event, context, callback) {

    if (event.httpMethod !== 'POST' || !event.body) {
        callback('error');
    }

    Request({
        method: 'post',
        url: 'https://accounts.google.com/o/oauth2/token',
        form: {
            code: event.code,
            client_id: "820664319776-kratepkqp0lnq1kgsk6ob34pc7u3meug.apps.googleusercontent.com",
            client_secret: "aBDbuxOOAFYJN3q5CdXpvj7_",
            redirect_uri: "https://superjs.org/oauth/google",
            grant_type: 'authorization_code'
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        }
    }, function (err, response, body) {
        if (!err && response.statusCode === 200) {
            callback(null, {
                statusCode: 200,
                body: body
            });
        } else {
            callback('error' + JSON.stringify(err));
        }

    })


}

export default google;