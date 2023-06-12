import Image from 'next/image'
import { Inter } from 'next/font/google'
import Marketplace from '@/components/Marketplace'
import Auction from '@/components/Auction'
import TopCreator from '@/components/TopCreator'
import TrendingCollection from '@/components/TrendingCollection'
import Category from '@/components/Category'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { SearchProvider } from '../components/SearchContext';

export default function Home() {
  return (
    
    <main className="">
        <Header/>
        <TrendingCollection/>
        <Auction/>
        <Marketplace/>
        <TopCreator/>
        <Category/>
        <Footer/>
    </main>
   
  )
}
