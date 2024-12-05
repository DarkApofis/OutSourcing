import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/ui/button'

export default function PreseleccionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">Servicio de Preselección</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  Nuestro servicio de preselección te ahorra tiempo y recursos al filtrar candidatos según tus criterios específicos. Nos aseguramos de que solo los candidatos más prometedores lleguen a tu proceso de selección final.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Beneficios Clave:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Filtrado inicial basado en requisitos específicos</li>
                  <li>Evaluaciones preliminares de habilidades</li>
                  <li>Entrevistas telefónicas o por video</li>
                  <li>Verificación de disponibilidad y expectativas salariales</li>
                  <li>Presentación de candidatos preseleccionados</li>
                </ul>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  <Link href={'/solicitar-cotizacion'}>Solicitar Información</Link>
                </Button>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/preseleccion.png"
                  alt="Proceso de preselección"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Añadir más secciones según sea necesario, similar a la página de Contratación */}
      </main>
      <Footer />
    </div>
  )
}

