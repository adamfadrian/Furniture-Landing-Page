import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Partner from '@/components/Partner';
import Recommendation from '@/components/Recommendation';
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';
import Products from '@/components/Products';

export default function Home() {
  return (
    <div>
      <Navbar /> 
      <Hero />
      <Section />
      <Partner />
      <Recommendation />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  )
}
