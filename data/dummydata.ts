import Image from "next/image";

const links = [
    {name: 'Shop', href: '/' },
    {name: 'Pages', href: '/' },
    {name: 'Contact', href: '/' },
    {name: 'IProduct', href: '/' },
    {name: 'Login', href: '/' },
];

const products = [
    { name: 'Product 1', price: 99, variants: { color: 'Red', size: 'Large' }, Image:'https://img.freepik.com/premium-photo/flat-lay-composition-with-makeup-cosmotic-pink-background_42299-694.jpg' },
    { name: 'Product 2', price: 89, variants: { color: 'Blue', size: 'Medium' } },
    { name: 'Product 3', price: 79, variants: { color: 'Green', size: 'Small' } },
    { name: 'Product 4', price: 99, variants: { color: 'Yellow', size: 'Extra Large' } },
    { name: 'Product 5', price: 89, variants: { color: 'Black', size: 'Extra Small' } },
    { name: 'Product 6', price: 99, variants: { size: 'Large'} },
    { name: 'Product 7', price: 89, variants: { color: 'White', size: 'Large' } },
    { name: 'Product 8', price: 79 },
    { name: 'Product 9', price: 99, variants: { color: 'Blue', size: 'Medium' } },
    { name: 'Product 10', price: 89 },
];


    export { links, products }
