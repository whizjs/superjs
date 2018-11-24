import auth0 from "auth0-js";

let isProd = process.env.NODE_ENV === 'production';
let BASE_URL = isProd ? "https://superjs.org" : "http://localhost:8080";

const webAuth = new auth0.WebAuth({
    domain: 'whizjs.auth0.com',
    clientID: 'Yov7tjP4Mw9Aele2-Mkhmxl6ZMTQqHUb',
    redirectUri: BASE_URL + '/user/auth0/callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
});

const loginAuth0 = () => {
    webAuth.authorize();
};

const handleAuth = (cb) => {
    webAuth.parseHash((err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
            // tokens.accessToken = authResult.accessToken;
            // tokens.idToken = authResult.idToken;
            // tokens.expiry = (new Date()).getTime() + authResult.expiresIn * 1000;
            // userProfile = authResult.idTokenPayload;
            cb();
        } else {
            console.log(err);
        }
    });
};



export {
    loginAuth0,
    handleAuth,
    webAuth
}