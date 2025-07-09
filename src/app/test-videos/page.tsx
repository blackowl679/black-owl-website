'use client'

export default function TestVideos() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <h1 className="text-white text-2xl mb-8">Prueba de Videos</h1>
      
      <div className="space-y-8">
        <div>
          <h2 className="text-white text-xl mb-4">Video Facturación</h2>
          <video 
            className="w-full max-w-md h-auto border border-gray-600 rounded"
            controls
            preload="metadata"
            muted
            playsInline
          >
            <source src="/videos/soren-facturacion-vertical.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>

        <div>
          <h2 className="text-white text-xl mb-4">Video CFDIs</h2>
          <video 
            className="w-full max-w-md h-auto border border-gray-600 rounded"
            controls
            preload="metadata"
            muted
            playsInline
          >
            <source src="/videos/soren-administracion-cfdis-vertical.mp4" type="video/mp4" />
            Tu navegador no soporta videos.
          </video>
        </div>

        <div>
          <h2 className="text-white text-xl mb-4">Prueba de enlace directo</h2>
          <p className="text-gray-300 mb-2">
            Enlace directo facturación: 
            <a href="/videos/soren-facturacion-vertical.mp4" target="_blank" className="text-blue-400 ml-2">
              /videos/soren-facturacion-vertical.mp4
            </a>
          </p>
          <p className="text-gray-300">
            Enlace directo CFDIs: 
            <a href="/videos/soren-administracion-cfdis-vertical.mp4" target="_blank" className="text-blue-400 ml-2">
              /videos/soren-administracion-cfdis-vertical.mp4
            </a>
          </p>
        </div>
      </div>
    </div>
  )
} 