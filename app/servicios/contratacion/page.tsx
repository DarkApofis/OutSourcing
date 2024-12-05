import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/ui/button'

export default function ContratacionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">Servicio de Contratación</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  Nuestro servicio de contratación está diseñado para ayudarte a encontrar el talento perfecto para tu empresa. Utilizamos tecnología avanzada y procesos probados para identificar, atraer y contratar a los mejores profesionales del mercado.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Beneficios Clave:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Acceso a una amplia red de candidatos calificados</li>
                  <li>Reducción del tiempo de contratación</li>
                  <li>Mejora en la calidad de las contrataciones</li>
                  <li>Ahorro de costos en el proceso de reclutamiento</li>
                  <li>Asesoramiento experto en tendencias del mercado laboral</li>
                </ul>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  <Link href={'/solicitar-cotizacion'}>Solicitar Información</Link>
                </Button>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/contratacion.png"
                  alt="Proceso de contratación"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-blue-600">Nuestro Proceso</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Análisis de Necesidades', description: 'Trabajamos contigo para entender tus requisitos específicos y la cultura de tu empresa.' },
                { title: 'Búsqueda y Selección', description: 'Utilizamos múltiples canales para identificar y atraer a los mejores candidatos.' },
                { title: 'Evaluación y Presentación', description: 'Realizamos entrevistas exhaustivas y presentamos solo a los candidatos más calificados.' },
              ].map((step, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para encontrar tu próximo talento?</h2>
            <p className="text-xl mb-8">Permítenos ayudarte a construir el equipo perfecto para tu empresa.</p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              Contactar a un Especialista
            </Button>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Testimonios</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: 'María González', company: 'Tech Innovators S.L.', text: 'El servicio de contratación de Ferless superó nuestras expectativas. Encontraron candidatos excepcionales en tiempo récord.' },
                { name: 'Carlos Rodríguez', company: 'Finanzas Globales Inc.', text: 'Gracias a Ferless, hemos mejorado significativamente la calidad de nuestras contrataciones. Su equipo es verdaderamente profesional.' },
                { name: 'Laura Martínez', company: 'EcoSolutions', text: 'El proceso fue fluido y eficiente. Ferless entendió perfectamente nuestras necesidades y cultura empresarial.' },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.company}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

