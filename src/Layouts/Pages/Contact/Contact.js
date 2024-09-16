import React from 'react'
import { Footer, Header } from '../../Components'
import { ContactBody, ContactHero } from './Layout'

export default function Contact() {
  return (
    <main>
        <Header />
        <ContactHero />
        <ContactBody />
        <Footer />
    </main>
  )
}
