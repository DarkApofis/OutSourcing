import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function ServiciosPage() {
  const servicios = [
    { title: 'Contratación', description: 'Encontramos el talento perfecto para tu empresa.', href: '/servicios/contratacion' },
    { title: 'Selección', description: 'Evaluamos y elegimos a los mejores candidatos.', href: '/servicios/seleccion' },
    { title: 'Preselección', description: 'Filtramos candidatos según tus criterios específicos.', href: '/servicios/preseleccion' },
    { title: 'Nómina', description: 'Gestionamos tu nómina de forma eficiente y precisa.', href: '/servicios/nomina' },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">Nuestros Servicios</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicios.map((servicio, index) => (
                <Link key={index} href={servicio.href} className="block">
                  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">{servicio.title}</h2>
                    <p className="text-gray-600 mb-4">{servicio.description}</p>
                    <span className="text-blue-600 hover:underline">Leer más &rarr;</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

