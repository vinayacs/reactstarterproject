import { initGATracking } from './googleAnalytics';
import { init as initHJTracking, HJTrigger } from './hotjarTracking';

export { TRACKING_EVENTS } from './trackingEventConstants';
export {
  trackUserInteraction,
  trackUserSession,
  trackPageView,
  setUserDimension,
  trackProfileInteraction,
  //updateTrackingDimension,
  addStateInfo,
  trackExternalLink,
  startAnalyticsTiming,
} from './googleAnalytics';
export const analyticsTrigger = HJTrigger;
export const initAnalyticsTracking = () => {
  initGATracking();
  initHJTracking();
};
