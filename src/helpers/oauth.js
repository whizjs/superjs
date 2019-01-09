const googleAppId = '1073861298966-tcc0mciibfhta1b27hhcv489pff5hn8i.apps.googleusercontent.com';
const googleScope = 'profile%20email';
const googleCallback = 'http://harlanluo.cf:8080/google-oauth-callback.html';

export function getGoogleOauthRedirectLink() {
  return `https://accounts.google.com/o/oauth2/auth?scope=${googleScope}&redirect_uri=${googleCallback}&client_id=${googleAppId}&response_type=code`;
}
