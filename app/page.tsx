import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../app/components/Header'
import { Footer } from '../app//components/Footer'
import { Button } from '../app//components/ui/button'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Banner Principal */}
        <section className="relative h-[400px] md:h-[600px]">
          <Image
            src="/team-home.png"
            alt="Equipo de trabajo eficaz"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Optimizamos tu talento, gestionamos tu éxito</h1>
              <p className="text-lg md:text-xl mb-8">Soluciones de outsourcing para potenciar tu empresa</p>
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                <Link href='/solicitar-cotizacion'>Contáctanos Ahora</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Servicios Principales */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-blue-600">Nuestros Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Contratación', icon: '👥', description: 'Encontramos el talento perfecto para tu empresa.' },
                { title: 'Selección', icon: '🔍', description: 'Evaluamos y elegimos a los mejores candidatos.' },
                { title: 'Preselección', icon: '📋', description: 'Filtramos candidatos según tus criterios específicos.' },
                { title: 'Nómina', icon: '💼', description: 'Gestionamos tu nómina de forma eficiente y precisa.' },
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={`/servicios/${service.title
                      .toLowerCase()
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')}`} 
                    className="text-blue-600 hover:underline">
                    Más Información
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Llamadas a la Acción */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">¿Listo para optimizar tu gestión de talento?</h2>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/solicitar-cotizacion">Solicitar Cotización</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contacto">Contáctanos Ahora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

