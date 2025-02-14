const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
module.exports = (phase) => {
  return {
    async rewrites() {
      
      return [
        {
          source: '/comunidad',
          destination: '/community'
        },
        {
          source: '/inicia-sesion',
          destination: '/login'
        },
        {
          source: '/registrate',
          destination: '/register'
        },        
        {
          source: '/tecnologia',
          destination: '/technology'
        },        
        {
          source: '/tutoriales',
          destination: '/tutorials'
        },        
        {
          source: '/talleres',
          destination: '/workshops'
        },        
        {
          source: '/api/blog/:path*',
          destination: 'https://pancreasdigital.blogspot.com/:path*' // blog api url
        },
        {
          source: '/api/google/:path*',
          destination:  '/api/interceptor/google/:path*' //add some logic for security reasons
        }
      ];
    },
    images: {
      domains: ['blogger.googleusercontent.com'],
    },
    env: {
      siteUrl: phase === PHASE_DEVELOPMENT_SERVER ? 'http://localhost:3000' : 'https://pancreas.digital',
      siteTitle: 'Pancreas Digital - Todo sobre tecnología aplicada a la diabetes',
      siteDescription: 'Pancreas Digital - xDrip+, Nightscout y todo sobre tecnología aplicada a la diabetes.',
      siteLogo: 'Vertical.jpg',
      siteName: 'Pancreas Digital',
      twitterCard: 'summary_large_image',
      twitterImageAlt: 'Pancreas Digital Logo',
      twitterSite: '@PancreasDigital',
    },
    reactStrictMode: true,
  };
};
