'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '../components/ui/button'

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          FERELSA SAS
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-600 hover:text-blue-600">Inicio</Link></li>
            <li className="relative group">
              <Link href="/servicios" className="text-gray-600 hover:text-blue-600">Servicios</Link>
              {/* Dropdown menu can be added here */}
            </li>
            <li><Link href="/sobre-nosotros" className="text-gray-600 hover:text-blue-600">Sobre Nosotros</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
            <li><Link href="/contacto" className="text-gray-600 hover:text-blue-600">Contacto</Link></li>
          </ul>
        </nav>
        <Button variant="default" className="hidden md:block bg-green-500 hover:bg-green-600 text-white">
          <Link href="/solicitar-cotizacion">Solicitar Cotización</Link>
        </Button>
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {/* Hamburger Icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col space-y-2 px-4 pb-4">
            <li><Link href="/" className="text-gray-600 hover:text-blue-600">Inicio</Link></li>
            <li><Link href="/servicios" className="text-gray-600 hover:text-blue-600">Servicios</Link></li>
            <li><Link href="/sobre-nosotros" className="text-gray-600 hover:text-blue-600">Sobre Nosotros</Link></li>
            <li><Link href="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
            <li><Link href="/contacto" className="text-gray-600 hover:text-blue-600">Contacto</Link></li>
            <li>
              <Button variant="default" className="bg-green-500 hover:bg-green-600 text-white w-full">
                <Link href="/solicitar-cotizacion">Solicitar Cotización</Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}