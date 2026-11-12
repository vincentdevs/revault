// Everything that changes at launch lives here. The build prints a warning for each value still unset.
export default {
  name: 'Revault',
  // The production origin, used for canonical tags, hreflang, the sitemap and structured data.
  // Today this is the Cloudflare address the site is served from. Replace it when a domain is connected.
  siteUrl: 'https://revault.querovincent.workers.dev',
  // Languages that are actually built. Add 'de' and 'fr' once those translations exist under src/content.
  locales: ['en', 'de', 'fr'],
  // Where the booking form posts. '#' keeps the form inert and tells the visitor so.
  formEndpoint: '#',
  // Booking calendar shown under the form once it exists.
  calendarUrl: '',
  // Verified profiles only, used for Organization sameAs.
  sameAs: [],
};
