import Image from 'next/image'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default function SobreNosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-blue-600 text-center">Sobre Nosotros</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Nuestra Historia</h2>
                <p className="text-lg mb-6">
                  FERELSA SAS nació en 2010 con la visión de transformar la forma en que las empresas gestionan su talento. Desde entonces, hemos ayudado a cientos de organizaciones a encontrar y desarrollar a los mejores profesionales, impulsando su crecimiento y éxito.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Nuestra Misión</h2>
                <p className="text-lg mb-6">
                  Nuestra misión es potenciar el éxito de las empresas a través de soluciones innovadoras de gestión de talento, proporcionando servicios de alta calidad en contratación, selección, preselección y nómina.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Nuestra Visión</h2>
                <p className="text-lg mb-6">
                  Ser reconocidos como el aliado estratégico líder en outsourcing de talento humano, brindando soluciones integrales en selección, preselección, contratación y nómina, que impulsen el crecimiento sostenible de nuestros clientes, garantizando excelencia, eficiencia y satisfacción tanto para las empresas como para los colaboradores.
                </p>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="/team-home.png"
                  alt="Equipo de FERELSA SAS"
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
            <h2 className="text-3xl font-bold mb-12 text-center text-blue-600">Nuestros Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Integridad', description: 'Actuamos con honestidad y transparencia en todo lo que hacemos.' },
                { title: 'Innovación', description: 'Buscamos constantemente nuevas formas de mejorar nuestros servicios y procesos.' },
                { title: 'Compromiso', description: 'Nos dedicamos plenamente al éxito de nuestros clientes y candidatos.' },
              ].map((valor, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
                  <h3 className="text-xl font-semibold mb-4">{valor.title}</h3>
                  <p className="text-gray-600">{valor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Nuestro Equipo</h2>
            <p className="text-xl mb-12">Conoce a los expertos detrás de FERELSA SAS</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Ana García', role: 'CEO', image: '/ana.png' },
                { name: 'Pedro Martínez', role: 'Director de Operaciones', image: '/pedro.png' },
                { name: 'Sofía López', role: 'Directora de Recursos Humanos', image: '/sofia.png' },
                { name: 'Javier Rodríguez', role: 'Director de Tecnología', image: '/javier.png' },
              ].map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-blue-600">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
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

