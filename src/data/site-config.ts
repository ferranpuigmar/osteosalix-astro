export const siteConfig = {
  companyName: 'Osteosalix',
  phone: '615026425',
  email: 'osteosalix@gmail.com',
  address: {
    full: 'Avinguda de Gràcia, 74, local (08172) Sant Cugat del Vallès',
    street: 'Avinguda de Gràcia, 74, local',
    locality: 'Sant Cugat del Vallès',
    postalCode: '08172',
    country: 'ES',
  },
  logo: {
    url: '/images/logo-white.svg',
    width: 151,
    height: 20,
    alt: 'Osteosalix Logo',
  },
  logoDark: {
    url: '/images/logo.svg',
    width: 151,
    height: 20,
    alt: 'Osteosalix Logo',
  },
  googleMaps: {
    apiKey: 'AIzaSyBb5itCUcYGc79sNoeHsobB1BJope5hwLE',
    lat: 41.464138,
    lng: 2.087106,
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Osteosalix",
    image: "https://strapi.osteosalix.com/uploads/imagotip_e7c66cd35e.svg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avinguda de Gràcia, 74, local",
      addressLocality: "Sant Cugat del Vallès",
      postalCode: "08172",
      addressCountry: "ES",
    },
    telephone: "615026425",
    url: "https://osteosalix.com",
  },
  cookieYesId: 'd4d23c6a4e4a1254d6ec2c97',
  // For the contact form, set to your Formspree endpoint or keep empty to use the local API
  // Get a free endpoint at: https://formspree.io
  formEndpoint: '',
} as const;
