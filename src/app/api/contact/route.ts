import { NextRequest, NextResponse } from 'next/server'

// Variables de entorno para producción
const NOCODB_BASE_URL = process.env.NOCODB_BASE_URL || 'https://devnocodb.bwblackowl.com'
const NOCODB_TOKEN = process.env.NOCODB_TOKEN || 'N2s9-oxHaIaXbqXAcLDoeozLFpOgkLbFUIPqhG7x'
const BASE_ID = process.env.NOCODB_BASE_ID || 'pjaayty2k4qsdnh'
const TABLE_ID = process.env.NOCODB_TABLE_ID || 'mjs8cfmgp37f22v'

interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validar campos requeridos
    if (!body.name || !body.email || !body.phone) {
      return NextResponse.json(
        { error: 'Los campos nombre, email y teléfono son obligatorios' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'El formato del email no es válido' },
        { status: 400 }
      )
    }

    // Preparar datos para NocoDB (nombres exactos como están en la tabla)
    const nocodbData = {
      Nombre: body.name.trim(),
      'Correo electronico': body.email.trim().toLowerCase(),
      'Celular / Whats App': body.phone.trim(),
      Empresa: body.company?.trim() || '',
      Mensaje: body.message?.trim() || '',
      Estado: 'Nuevo'
    }

    // Enviar a NocoDB
    const nocodbUrl = `${NOCODB_BASE_URL}/api/v1/db/data/noco/${BASE_ID}/${TABLE_ID}`
    
    const response = await fetch(nocodbUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'xc-token': NOCODB_TOKEN,
      },
      body: JSON.stringify(nocodbData)
    })

    if (!response.ok) {
      const errorData = await response.text()
      console.error('Error de NocoDB:', response.status, errorData)
      
      return NextResponse.json(
        { error: 'Error al guardar la información. Inténtalo de nuevo.' },
        { status: 500 }
      )
    }

    const result = await response.json()
    
    return NextResponse.json(
      { 
        success: true, 
        message: '¡Mensaje enviado correctamente! Te contactaremos pronto.',
        id: result.Id 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error en API de contacto:', error)
    
    return NextResponse.json(
      { error: 'Error interno del servidor. Inténtalo de nuevo.' },
      { status: 500 }
    )
  }
}

// Manejar otros métodos HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
} 