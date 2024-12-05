import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { PdfViewer } from '../components/PDFViewer'

export default function LeanCanvaPage() {

    return (
        <div>
            <Header />
            <PdfViewer file="LeanCanva.pdf" />
            <Footer />
        </div>
    )
}