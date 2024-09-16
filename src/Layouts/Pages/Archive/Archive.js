import React from 'react'
import { Footer, Header } from '../../Components'
import { ArchiveBody, ArchiveHero } from './Layout'

export default function Archive() {
  return (
    <main>
        <Header />
        <ArchiveHero />
        <ArchiveBody />
        <Footer />
    </main>
  )
}
