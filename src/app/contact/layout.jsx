export const metadata = {
  title: 'Contact Us | Green Tech Minerals',
  description: 'Connect directly with Green Tech Minerals registered offices across Jharkhand, West Bengal, Odisha, and Chhattisgarh for institutional scrap procurement and trade inquiries.',
  openGraph: {
    title: 'Contact Us | Green Tech Minerals',
    description: 'Direct communication channels for institutional inquiries, metal trading partnerships, and regulatory correspondence.',
    url: 'https://www.greentechmineralpvtltd.com/contact',
    images: [{ url: '/assets/logo.jpeg', width: 800, height: 600, alt: 'Green Tech Minerals Contact' }],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
