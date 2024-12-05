import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/ui/button'

export default function NominaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600">Servicio de Nómina</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg mb-6">
                  Nuestro servicio de nómina ofrece una gestión eficiente y precisa de los pagos a tus empleados. Nos encargamos de todos los aspectos relacionados con la nómina, permitiéndote concentrarte en el crecimiento de tu negocio.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Beneficios Clave:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>Cálculo preciso de salarios y deducciones</li>
                  <li>Cumplimiento con las regulaciones fiscales y laborales</li>
                  <li>Gestión de beneficios y compensaciones</li>
                  <li>Informes detallados y análisis de costos laborales</li>
                  <li>Integración con sistemas de RRHH y contabilidad</li>
                </ul>
                <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                  <Link href={'/solicitar-cotizacion'}>Solicitar Información</Link>
                </Button>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/nomina.png"
                  alt="Gestión de nómina"
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

