import auth0 from "auth0-js";

const webAuth = new auth0.WebAuth({
    domain: 'whizjs.auth0.com',
    clientID: 'Yov7tjP4Mw9Aele2-Mkhmxl6ZMTQqHUb',
    redirectUri: 'http://localhost:8080/user/auth0/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
});

let tokens = {};
let userProfile = {};

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

const isLoggedIn = () => {
    return (tokens.accessToken && (new Date()).getTime() < tokens.expiry);
};

const logout = () => {
    tokens = {};
};

const getProfile = () => {
    return userProfile;
};

export {
    loginAuth0,
    logout,
    handleAuth,
    isLoggedIn,
    getProfile
}