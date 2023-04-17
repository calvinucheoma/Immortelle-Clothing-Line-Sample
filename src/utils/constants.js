import React from 'react';
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi';
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text: 'My mission is to revolutionize the way men look by offering a personalized wear that combines the latest fashion trends with classic styles and impeccable craftsmanship, creating a sense of luxury and confidence for our customers.',
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text: 'My vision is to empower men to look and feel their best by providing them with high-quality, stylish, and versatile wears through our online clothing brand.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text: 'As a newly established online clothing brand, I have a short but exciting history of providing high-quality and stylish suits, blazers, and one-piece wear for men who value quality, comfort, and style.',
  },
];

export const products_url = '/.netlify/functions/products';

export const single_product_url = `/.netlify/functions/single-product?id=`;
