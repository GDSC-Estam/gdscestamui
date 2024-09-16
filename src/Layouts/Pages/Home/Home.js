import React from 'react'
import { Footer, Header } from '../../Components'
import { HomeBody, HomeHero } from './Layout'

export default function Home() {
  return (
    <main>
        <Header />
        <HomeHero />
        <HomeBody />
        <Footer />
    </main>
  )
}
