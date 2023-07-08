import Image from 'next/image'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Partner from '@/components/Partner';
import Recommendation from '@/components/Recommendation';
import NewsLetter from '@/components/NewsLetter';
import Footer from '@/components/Footer';

interface Furniture {
  id: number;
  name: string;
  description: string;
  picture: string;
  category: string;
  price: number;
  available: boolean;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  colors: string[];
  materials: string[];
  reviews?: {
    id: number;
    rating: number;
    comment: string;
    author: string;
  }[];
}

export default function Home() {
  const [data, setData] = useState<Furniture[]>([])

  const getApi = async () => {
    try {
      const response = await axios.get(`
      http://localhost:3004/furniture`);
      console.log(response.data);
      setData(response.data)
    } catch (error) {
      console.error(error);
    }
  };
console.log('data', data)
  useEffect(() => {
    getApi()
  },[])
  return (
    <div>
      <Navbar /> 
      <Hero />
      <Section />
      <Partner />
      <Recommendation />
      <NewsLetter />
      <Footer />
    </div>
  )
}
