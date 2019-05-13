/**
 * Genius uses the OAuth2 standard for making API calls on behalf of individual users. Requests are
 * authenticated with an Access Token sent in an HTTP header
 * (or as a request parameter if you must).
 * All interaction with the API must be done over HTTPS.
 *
 * This is the most work in progress part of all the models. We don't want to be starting an auth
 * library. Figure out what the bare minimum is so we don't break anything for other libs.
 *
 * possible oauth2 libs to look at:
 * [https://github.com/andreareginato/simple-oauth2]
 * [http://passportjs.org/]
 *
 * Official Docs:
 * [https://docs.genius.com/#/authentication-h1]
 */

type CodeResponseType = 'code';
type AuthorizationCodeGrantType = 'authorization_code';

export interface AuthRequestBodyData {
  'code': string; // "CODE_FROM_REDIRECT",
  'client_id': string; // "YOUR_CLIENT_ID",
  'client_secret': string; // "YOUR_CLIENT_SECRET",
  'redirect_uri': string; // "YOUR_REDIRECT_URI",
  'response_type': CodeResponseType | string; // "code",
  'grant_type': AuthorizationCodeGrantType | string; // "authorization_code"
}

export interface AccessTokenWrapper {
  'access_token': string; // "ACCESS_TOKEN"
}