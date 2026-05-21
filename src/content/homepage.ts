import booksData from './books.json';

export type Genre = '아동' | '소설' | '자기계발';
export type ContentLanguage = 'ko' | 'en' | 'vi';
export type BookDescription = {
  aboutBook: string[];
  aboutAuthor: string[];
};

export const sectionTitles = {
  about: 'About us',
  story: 'Our Story',
  network: 'Network',
  showcase: 'Exported titles',
  books: 'Rights Guide',
  news: 'News & Events',
  partners: 'Partners',
  contact: 'Contact Us',
} as const;

export const navLinks = [
  { href: '#about', label: sectionTitles.about },
  { href: '#showcase', label: sectionTitles.showcase },
  { href: '#books', label: sectionTitles.books },
  { href: '#partners', label: sectionTitles.partners },
  { href: '#contact', label: sectionTitles.contact },
];

export const stats: { value: number; suffix?: string; labelKey: string }[] = [
  { value: 17, labelKey: 'about.stats.domesticDistributors' },
  { value: 3, suffix: '+', labelKey: 'about.stats.itStartups' },
  { value: 2, suffix: '+', labelKey: 'about.stats.globalBases' },
];

export const services = [
  { num: '01', titleKey: 'about.services.01.title', bodyKey: 'about.services.01.body' },
  { num: '02', titleKey: 'about.services.02.title', bodyKey: 'about.services.02.body' },
  { num: '03', titleKey: 'about.services.03.title', bodyKey: 'about.services.03.body' },
  { num: '04', titleKey: 'about.services.04.title', bodyKey: 'about.services.04.body' },
];

export const territoryKeys: number[] = [0, 1, 2, 3, 4, 5, 6];

export type NetworkCard = {
  id: string;
  yearMode: 'fixed' | 'tbd' | 'new';
  yearText?: string;
  placeholder?: boolean;
  hasBody?: boolean;
};

export const networkCards: Record<'seoul' | 'regional', NetworkCard[]> = {
  seoul: [
    { id: 'wisdomseller', yearMode: 'fixed', yearText: '2013', hasBody: true },
    { id: 'bookly', yearMode: 'fixed', yearText: '2024', hasBody: true },
    { id: 'subsidiary2', yearMode: 'tbd', placeholder: true },
    { id: 'subsidiary3', yearMode: 'tbd', placeholder: true },
    { id: 'subsidiary4', yearMode: 'tbd', placeholder: true },
  ],
  regional: [
    { id: 'regionalDist', yearMode: 'tbd', placeholder: true },
    { id: 'itStartup1', yearMode: 'tbd', placeholder: true },
    { id: 'itStartup2', yearMode: 'tbd', placeholder: true },
    { id: 'itStartup3', yearMode: 'tbd', placeholder: true },
    { id: 'vietnam', yearMode: 'new', hasBody: true },
  ],
};

export type Book = {
  id: string;
  title: string;
  publisher?: string;
  genre: Genre;
  cover: string;
  descriptions?: Partial<Record<ContentLanguage, BookDescription>>;
};

export const books = booksData as Book[];

export type FilterValue = '전체' | Genre;
export const bookFilters: { value: FilterValue; key: 'all' | 'child' | 'fiction' | 'selfDev' }[] = [
  { value: '전체', key: 'all' },
  { value: '아동', key: 'child' },
  { value: '소설', key: 'fiction' },
  { value: '자기계발', key: 'selfDev' },
];

export const genreKeyByValue: Record<Genre, 'child' | 'fiction' | 'selfDev'> = {
  '아동': 'child',
  '소설': 'fiction',
  '자기계발': 'selfDev',
};

export const newsItems = [
  { id: '1' as const },
  { id: '2' as const },
  { id: '3' as const },
];

export const managers = [
  { id: 'korean', email: 'camino@hibookly.com' },
  { id: 'english', email: 'chy.huynh@hibookly.com' },
  { id: 'chinese', email: 'maihanh@hibookly.com' },
  { id: 'seaJapanese', email: 'lana@hibookly.com' },
] as const;

export const offices = [
  { id: 'korea' },
  { id: 'vietnam' },
] as const;
