import Image from 'next/image'
import Link from 'next/link'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

const blogPosts = [
  {
    title: "Tendencias en Contratación para 2024",
    excerpt: "Descubre las últimas tendencias en contratación y cómo pueden impactar en tu estrategia de recursos humanos.",
    image: "/tendencias.png",
    date: "15 de Marzo, 2024",
    author: "Ana García",
    slug: "tendencias-contratacion-2024"
  },
  {
    title: "Cómo Optimizar tu Proceso de Selección",
    excerpt: "Aprende estrategias efectivas para mejorar tu proceso de selección y encontrar a los mejores candidatos.",
    image: "/optimizar.png",
    date: "22 de Febrero, 2024",
    author: "Carlos Rodríguez",
    slug: "optimizar-proceso-seleccion"
  },
  {
    title: "La Importancia de la Gestión Eficiente de Nóminas",
    excerpt: "Explora cómo una gestión eficiente de nóminas puede mejorar la satisfacción de los empleados y reducir costos.",
    image: "/gestion.png",
    date: "5 de Enero, 2024",
    author: "Laura Martínez",
    slug: "importancia-gestion-eficiente-nominas"
  }
]

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-12 text-blue-600 text-center">Blog de FERELSA SAS</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Link key={index} href={`/blog/${post.slug}`} className="block">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={300}
                      height={200}
                      className="w-full object-cover"
                    />
                    <div className="p-6">
                      <h2 className="text-xl font-semibold mb-2 text-blue-600">{post.title}</h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                      <div className="text-sm text-gray-500">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </div>
                    </div>
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

