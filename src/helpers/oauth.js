const googleAppId = '820664319776-kratepkqp0lnq1kgsk6ob34pc7u3meug.apps.googleusercontent.com';
const googleScope = 'profile%20email';
const googleCallback = 'http:localhost:8080/oauth/google';

export function getGoogleOauthRedirectLink() {
  return `https://accounts.google.com/o/oauth2/auth?scope=${googleScope}&redirect_uri=${googleCallback}&client_id=${googleAppId}&response_type=code`;
}
