"use client";

// Badge LinkedIn ufficiale — carica lo script platform.linkedin.com
// con next/script in modalità lazyOnload per non impattare l'LCP.
//
// Il link testuale di fallback viene reso accessibile (sr-only) ma
// nascosto visivamente, così non si vede il nome "Fabio Regnaud Carcas"
// prima che lo script iniett l'iframe del badge vero.

import Script from "next/script";

export default function LinkedInBadge() {
  return (
    <div className="flex w-full justify-center">
      <div
        className="badge-base LI-profile-badge"
        data-locale="it_IT"
        data-size="large"
        data-theme="light"
        data-type="HORIZONTAL"
        data-vanity="fabio-regnaud-carcas"
        data-version="v1"
      >
        <a
          className="badge-base__link LI-simple-link sr-only"
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
