import Cookies from 'js-cookie';

// Cookie names
export const COOKIE_NAMES = {
  // User preferences
  PREFERRED_AI_TOOL: 'stacksaver_preferred_ai_tool',
  USER_THEME: 'stacksaver_theme',
  
  // Analytics and tracking
  SESSION_ID: 'stacksaver_session_id',
  FIRST_VISIT: 'stacksaver_first_visit',
  LAST_VISIT: 'stacksaver_last_visit',
  
  // Conversion tracking
  FORM_STARTED: 'stacksaver_form_started',
  FORM_COMPLETED: 'stacksaver_form_completed',
  
  // A/B testing
  AB_TEST_GROUP: 'stacksaver_ab_test_group',
  
  // Consent
  COOKIE_CONSENT: 'stacksaver_cookie_consent',
} as const;

// Cookie options
const DEFAULT_OPTIONS = {
  expires: 365, // 1 year
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
};

// User preferences
export const setPreferredAiTool = (tool: string) => {
  Cookies.set(COOKIE_NAMES.PREFERRED_AI_TOOL, tool, DEFAULT_OPTIONS);
};

export const getPreferredAiTool = (): string | undefined => {
  return Cookies.get(COOKIE_NAMES.PREFERRED_AI_TOOL);
};

export const setUserTheme = (theme: 'light' | 'dark') => {
  Cookies.set(COOKIE_NAMES.USER_THEME, theme, DEFAULT_OPTIONS);
};

export const getUserTheme = (): 'light' | 'dark' => {
  return (Cookies.get(COOKIE_NAMES.USER_THEME) as 'light' | 'dark') || 'light';
};

// Session tracking
export const getOrCreateSessionId = (): string => {
  let sessionId = Cookies.get(COOKIE_NAMES.SESSION_ID);
  if (!sessionId) {
    sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    Cookies.set(COOKIE_NAMES.SESSION_ID, sessionId, { ...DEFAULT_OPTIONS, expires: 1 }); // 1 day
  }
  return sessionId;
};

export const trackFirstVisit = () => {
  if (!Cookies.get(COOKIE_NAMES.FIRST_VISIT)) {
    Cookies.set(COOKIE_NAMES.FIRST_VISIT, new Date().toISOString(), DEFAULT_OPTIONS);
  }
  Cookies.set(COOKIE_NAMES.LAST_VISIT, new Date().toISOString(), DEFAULT_OPTIONS);
};

export const getFirstVisit = (): Date | null => {
  const firstVisit = Cookies.get(COOKIE_NAMES.FIRST_VISIT);
  return firstVisit ? new Date(firstVisit) : null;
};

export const getLastVisit = (): Date | null => {
  const lastVisit = Cookies.get(COOKIE_NAMES.LAST_VISIT);
  return lastVisit ? new Date(lastVisit) : null;
};

// Form tracking
export const setFormStarted = () => {
  Cookies.set(COOKIE_NAMES.FORM_STARTED, new Date().toISOString(), { ...DEFAULT_OPTIONS, expires: 7 }); // 7 days
};

export const setFormCompleted = (email: string) => {
  Cookies.set(COOKIE_NAMES.FORM_COMPLETED, JSON.stringify({
    email,
    timestamp: new Date().toISOString(),
  }), DEFAULT_OPTIONS);
};

export const getFormStarted = (): Date | null => {
  const formStarted = Cookies.get(COOKIE_NAMES.FORM_STARTED);
  return formStarted ? new Date(formStarted) : null;
};

export const getFormCompleted = (): { email: string; timestamp: string } | null => {
  const formCompleted = Cookies.get(COOKIE_NAMES.FORM_COMPLETED);
  return formCompleted ? JSON.parse(formCompleted) : null;
};

// A/B testing
export const getOrSetAbTestGroup = (testName: string, groups: string[]): string => {
  const cookieName = `${COOKIE_NAMES.AB_TEST_GROUP}_${testName}`;
  let group = Cookies.get(cookieName);
  
  if (!group) {
    group = groups[Math.floor(Math.random() * groups.length)];
    Cookies.set(cookieName, group, DEFAULT_OPTIONS);
  }
  
  return group;
};

// Consent management
export const setCookieConsent = (consent: boolean) => {
  Cookies.set(COOKIE_NAMES.COOKIE_CONSENT, consent.toString(), DEFAULT_OPTIONS);
};

export const getCookieConsent = (): boolean => {
  const consent = Cookies.get(COOKIE_NAMES.COOKIE_CONSENT);
  return consent === 'true';
};

// Analytics helper
export const getAnalyticsData = () => {
  return {
    sessionId: getOrCreateSessionId(),
    firstVisit: getFirstVisit(),
    lastVisit: getLastVisit(),
    preferredAiTool: getPreferredAiTool(),
    formStarted: getFormStarted(),
    formCompleted: getFormCompleted(),
    cookieConsent: getCookieConsent(),
  };
};

// Clear all cookies (for testing or user request)
export const clearAllCookies = () => {
  Object.values(COOKIE_NAMES).forEach(cookieName => {
    Cookies.remove(cookieName);
  });
};
