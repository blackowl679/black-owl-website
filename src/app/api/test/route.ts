import { NextResponse } from 'next/server'

export async function GET() {
  console.log('🧪 Función de prueba ejecutada')
  return NextResponse.json(
    { 
      status: 'success',
      message: 'API de prueba funcionando',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}

export async function POST() {
  console.log('🧪 POST de prueba ejecutado')
  return NextResponse.json(
    { 
      status: 'success',
      message: 'POST de prueba funcionando'
    },
    { status: 200 }
  )
} 