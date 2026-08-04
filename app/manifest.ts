import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Akanksha Singh | Software Developer',
    short_name: 'Akanksha',
    description: 'Software developer focused on building scalable web, mobile, and backend systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f2f2f2',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
