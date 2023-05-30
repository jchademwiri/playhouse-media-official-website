'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from './storageHelper';

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(true);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? 'granted' : 'granted';

    window.gtag('consent', 'update', {
      analytics_storage: newValue,
    });

    setLocalStorage('cookie_consent', cookieConsent);

    //For Testing
    console.log('Cookie Consent: ', cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={` ${
        cookieConsent != null ? 'hidden' : 'flex'
      }  fixed bottom-0 left-0 right-0 mx-auto my-10 flex max-w-max flex-col items-center justify-between gap-4 rounded-lg bg-armyGreen px-3 py-3 shadow sm:flex-row md:max-w-screen-sm md:px-4`}
    >
      <div className='text-center'>
        <Link href='/'>
          <p>
            We use <span className='font-bold text-accent'>cookies</span> on our
            site.
          </p>
        </Link>
      </div>

      <div className='flex gap-2'>
        <button
          className='rounded-md border-armyGreen px-5 py-2 text-gray-300'
          onClick={() => setCookieConsent(true)}
        >
          Decline
        </button>
        <button
          className='bg-arborder-armyGreen rounded-lg px-5 py-2 text-white'
          onClick={() => setCookieConsent(true)}
        >
          Allow Cookies
        </button>
      </div>
    </div>
  );
}
