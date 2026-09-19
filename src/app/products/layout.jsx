export const metadata = {
  title: 'Products Catalog & Metallurgical Specifications | Green Tech Minerals',
  description: 'Comprehensive inventory of structural steel, TMT bars, sponge iron, MS/CI scrap, iron ore, coal, and metallurgical coke for foundry and furnace procurement.',
  openGraph: {
    title: 'Products Catalog & Specifications | Green Tech Minerals',
    description: 'Comprehensive inventory of structural steel, TMT bars, sponge iron, MS/CI scrap, iron ore, coal, and metallurgical coke.',
    url: 'https://greentechminerals.com/products',
    images: [{ url: '/assets/img15.jpg', width: 1200, height: 630, alt: 'Green Tech Minerals Product Catalog' }],
  },
};

export default function ProductsLayout({ children }) {
  return <>{children}</>;
}
