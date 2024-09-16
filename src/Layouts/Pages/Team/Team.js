import React from 'react'
import { Footer, Header } from '../../Components'
import { TeamBody, TeamHero } from './Layout'

export default function About() {
  return (
    <main>
        <Header />
        <TeamHero />
        <TeamBody />
        <Footer />
    </main>
  )
}
