"use client";

// Badge LinkedIn ufficiale — carica lo script platform.linkedin.com
// con next/script in modalità lazyOnload per non impattare l'LCP.
// Fino a che lo script non arriva, si vede solo il link testuale di fallback.

import Script from "next/script";

export default function LinkedInBadge() {
  return (
    <div className="flex flex-col items-center">
      <div
        className="badge-base LI-profile-badge"
        data-locale="it_IT"
        data-size="medium"
        data-theme="light"
        data-type="VERTICAL"
        data-vanity="fabio-regnaud-carcas"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link"
          href="https://it.linkedin.com/in/fabio-regnaud-carcas?trk=profile-badge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fabio Regnaud Carcas
        </a>
      </div>

      <Script
        src="https://platform.linkedin.com/badges/js/profile.js"
        strategy="lazyOnload"
      />
    </div>
  );
}
