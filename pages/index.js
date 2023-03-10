import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
      <div className="min-h-screen">
        <Navbar/>
        <Hero/>
      </div>
  )
}
