import {allServices,cities,cityName} from '@/lib/data';

export const primaryPages=[
  {name:'Home',href:'/'},
  {name:'About',href:'/about'},
  {name:'Gallery',href:'/gallery'},
  {name:'Reviews',href:'/reviews'},
  {name:'Contact',href:'/contact'},
  {name:'Service Areas',href:'/service-areas'},
];

export const legalPages=[
  {name:'Privacy Policy',href:'/privacy-policy'},
  {name:'Terms and Conditions',href:'/terms-and-conditions'},
  {name:'Accessibility Statement',href:'/accessibility'},
  {name:'HTML Sitemap',href:'/sitemap'},
];

export const servicePages=allServices.map(service=>({name:service.name,href:`/${service.slug}`}));
export const serviceAreaPages=cities.map(city=>({name:cityName(city),href:`/service-areas/${city}`}));
export const allSitePages=[...primaryPages,...servicePages,...serviceAreaPages,...legalPages];
