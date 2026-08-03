import { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie_consent_the_local_guy';
export const COOKIE_CONSENT_EVENT = 'cookie_consent_change';

export type ConsentStatus = 'accepted' | 'declined' | null;

export function useCookieConsent(): ConsentStatus {
  const [consent, setConsent] = useState<ConsentStatus>(
    () => (localStorage.getItem(STORAGE_KEY) as ConsentStatus) ?? null
  );

  useEffect(() => {
    // Same-tab updates dispatched by CookieBanner
    const handleCustom = () => {
      setConsent((localStorage.getItem(STORAGE_KEY) as ConsentStatus) ?? null);
    };
    // Cross-tab updates via the storage event
    const handleStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) {
        setConsent((e.newValue as ConsentStatus) ?? null);
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT, handleCustom);
    window.addEventListener('storage', handleStorage);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT, handleCustom);
      window.removeEventListener('storage', handleStorage);
    };
  }, []);

  return consent;
}
