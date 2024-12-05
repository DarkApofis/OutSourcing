interface PdfViewerProps {
    file: string;
}

export function PdfViewer({ file }: PdfViewerProps) {
    return (
        <iframe
        title="PDF Viewer"
        src={`/${file}`}
        style={{ width: '100%', height: '100vh' }}
        />
    )
};
  
  export default PdfViewer;