'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { toast } from '../components/ui/use-toast'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    toast({
      title: "Formulario enviado",
      description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
    })
    setFormData({ nombre: '', email: '', mensaje: '' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">Contáctanos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                    <Input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Enviar Mensaje</Button>
                </form>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-blue-600">Información de Contacto</h2>
                <p className="mb-4">No dudes en ponerte en contacto con nosotros para cualquier consulta o información adicional que necesites.</p>
                <ul className="space-y-2 mb-8">
                  <li><strong>Dirección:</strong> Calle Principal, 123, 28001 Madrid</li>
                  <li><strong>Teléfono:</strong> +34 900 123 456</li>
                  <li><strong>Email:</strong> info@ferless.com</li>
                </ul>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/chincheta.png"
                    alt="Mapa de ubicación"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

