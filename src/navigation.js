import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      links: [
        { text: 'Nosotros', href: '/#nosotros' },
        { text: 'Servicios', href: '/#servicios' },
        { text: 'Clientes', href: '/#clientes' },
        { text: 'Contacto', href: '/#contacto' },
        { text: 'Ingresar', href: 'https://www.mapon.com/new/' },
       
  
      ],
    },
   
    
       
  
  ],
  actions: [{ text: 'Más información', variant:'primary', href: 'tel:0998180956', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Producto',
      links: [
        { text: 'Plan estándar', href: '#' },
        { text: 'Plan bronce', href: '#' },
        { text: 'Plan plata', href: '#' },
        { text: 'Contáctanos', href: 'tel:0984858548' },
        { text: 'Precios', href: 'tel:0984858548' },

      ],
    },
    {
      title: 'Sobre nosotros',
      links: [
        { text: 'Contacto', href: '#' },
        { text: 'Quiénes somos', href: '#' },
        { text: 'Términos y condiciones', href: '#' },
        { text: 'Política de privacidad', href: '#' },
        { text: 'Nuestros planes', href: '#' },
      
      ],
    },
    {
      title: 'Soporte',
      links: [
        { text: 'Monitoreo', href: 'tel:0999955955' },
        { text: 'Ventas', href: 'tel:0984858548' },
        { text: 'Atención al cliente', href: 'tel:0998180956' },
        { text: 'Operaciones', href: 'tel:0962989175' },
        { text: 'Sugerencias', href: 'tel:0998180956' },
      ],
    },
    {
      title: 'Empresa',
      links: [
        { text: 'Nosotros', href: '#nosotros' },
        { text: 'Servicios', href: '#servicios' },
        { text: 'Clientes', href: '#clientes' },
        { text: 'Contacto', href: '#contacto' },
        { text: 'Ingresar', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Términos y condiciones', href: getPermalink('/terms') },
    { text: 'Política de privacidad', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:info-circle', href: 'https://www.emis.com/php/company-profile/EC/Solutiontracker_CiaLtda_es_8196323.html' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/solutiontrackerec/?hl=es-la' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/solutiontrackerecuador/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/onwidget/astrowind' },
  ],
  footNote: `

    Made with ♥ by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/roggrt"> a developer </a>| SolutionTracker · Todos los derechos reservados.
  `,
};
