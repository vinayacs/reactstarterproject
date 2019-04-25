import queryString from 'querystring';

const getApplicationEnvVar = envVarName =>
  process.env[`REACT_APP_${envVarName}`] || process.env[`STORYBOOK_${envVarName}`];

localStorage.setItem('debug', getApplicationEnvVar('DEBUG') || ''); // manually set because CRA doesn't allow arbitrary env variable names.
const debug = require('debug');
global.log = debug('app');

const qs = queryString.parse(global.location.search.replace(/^\?/, ''));

const egoApiOverride = qs.EGO_API;
if (egoApiOverride) {
  global.log('warning: using ego api override');
}
export const devDebug = process.env.NODE_ENV === 'development';

export const egoApiRoot: string = egoApiOverride || getApplicationEnvVar('EGO_API') || '';

const personaApiOverride = qs.PERSONA_API;
if (personaApiOverride) {
  global.log('warning: using persona api override');
}

export const shortUrlApi = getApplicationEnvVar('SHORTURL_API');
export const shortUrlResolveRoot = getApplicationEnvVar('SHORTURL_RESOLVE_ROOT');

export const arrangerApiRoot = getApplicationEnvVar('ARRANGER_API');

export const arrangerProjectId = getApplicationEnvVar('PROJECT_ID');

export const personaApiRoot: string =
  personaApiOverride || getApplicationEnvVar('PERSONA_API') || '';
export const secretStorageApiRoot: string = getApplicationEnvVar('SECRETS_API');

export const cavaticaApiRoot: string = getApplicationEnvVar('CAVATICA_API');
export const cavaticaWebRoot: string = getApplicationEnvVar('CAVATICA_WEB');
export const cavaticaWebRegistrationRoot: string = getApplicationEnvVar(
  'CAVATICA_WEB_REGISTRATION',
);

export const googleAppId = getApplicationEnvVar('GOOGLE_APP_ID');
export const facebookAppId = getApplicationEnvVar('FACEBOOK_APP_ID');
export const egoAppId = getApplicationEnvVar('EGO_APP_ID');
export const googleMapsKey = getApplicationEnvVar('GOOGLE_MAPS_KEY');

export const hotjarHost = getApplicationEnvVar('HOTJAR_HOST');
export const hotjarId = getApplicationEnvVar('HOTJAR_ID');

export const gaTrackingID: string = getApplicationEnvVar('GA_TRACKING_ID');

export const defaultRedirectUri = getApplicationEnvVar('DEFAULT_REDIRECT_URI') || '';

export const allRedirectUris = (getApplicationEnvVar('LOGIN_REDIRECT_NOT_REQUIRED') || '')
  .split(',')
  .concat(defaultRedirectUri)
  .filter(Boolean);

export const requireLogin = getApplicationEnvVar('REQUIRE_LOGIN') === 'true';

export const kfWebRoot: string = getApplicationEnvVar('KF_WEB_ROOT');
export const kfFacebook: string = getApplicationEnvVar('KF_FACEBOOK');
export const kfTwitter: string = getApplicationEnvVar('KF_TWITTER');
export const kfGithub: string = getApplicationEnvVar('KF_GITHUB');
export const kfMailchimpList: string = getApplicationEnvVar('KF_MAILCHIMP_LIST');

export const cookiesDomain: string = getApplicationEnvVar('COOKIES_DOMAIN');
export const maintenanceMode: Boolean = getApplicationEnvVar('MAINTENANCE_MODE') === 'true';
export const oauthRedirectUrl: string = encodeURIComponent(
  getApplicationEnvVar('OAUTH_REDIRECT_URL') || `${window.location.origin}/oauth_redirect/`,
);

export const gen3ApiRoot = getApplicationEnvVar('GEN3_API');
export const gen3WebRoot = getApplicationEnvVar('GEN3_WEB') || 'http://www.gen3.org/';
export const gen3OauthRedirect = encodeURIComponent(`${window.location.origin}/gen3_redirect/`);

export const dcfApiRoot = getApplicationEnvVar('DCF_API');
export const dcfWebRoot = getApplicationEnvVar('DCF_WEB') || 'https://dcf.gen3.org/';
export const dcfOauthRedirect = encodeURIComponent(`${window.location.origin}/dcf_redirect/`);

export const fenceAuthClientUri = getApplicationEnvVar('FENCE_AUTH_CLIENT_URI') || '';
export const fenceRefreshUri = getApplicationEnvVar('FENCE_REFRESH_URI') || '';
export const fenceTokensUri = getApplicationEnvVar('FENCE_TOKENS_URI') || '';

export const reactApiDataVersionApi: string = getApplicationEnvVar('DATA_VERSION_API') || null;
export const reactApiDataVersionFallback: string =
  getApplicationEnvVar('DATA_VERSION_FALLBACK') || '';

// Public Stats
export const publicStatsApiRoot = getApplicationEnvVar('PUBLIC_STATS_ROOT') || '';

export const arrangerAdminApiRoot = getApplicationEnvVar('ARRANGER_ADMIN_ROOT') || null;