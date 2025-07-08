import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY || 'placeholder')

export async function POST(request: NextRequest) {
  try {
    // Verificar si la API key está configurada correctamente
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'placeholder') {
      return NextResponse.json(
        { error: 'Servicio de correo no configurado' },
        { status: 500 }
      )
    }

    const { name, email, phone, company, message } = await request.json()

    // Validar campos requeridos
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos' },
        { status: 400 }
      )
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      )
    }

    // Enviar correo con Resend
    const { data, error } = await resend.emails.send({
      from: 'BLACK OWL Website <contacto@bwblackowl.com>',
      to: ['bwblackowl@gmail.com'],
      subject: `Nuevo Lead - ${name}${company ? ` de ${company}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Nuevo Lead - BLACK OWL</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .field-label { font-weight: bold; color: #555; margin-bottom: 5px; }
            .field-value { background: white; padding: 10px; border-radius: 5px; border-left: 4px solid #667eea; }
            .footer { text-align: center; margin-top: 30px; color: #666; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🦉 Nuevo Lead de BLACK OWL</h1>
              <p>Alguien se interesó en tus servicios</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Nombre:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Correo:</div>
                <div class="field-value">${email}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📱 WhatsApp:</div>
                <div class="field-value">${phone}</div>
              </div>
              
              ${company ? `
              <div class="field">
                <div class="field-label">🏢 Empresa:</div>
                <div class="field-value">${company}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="field-label">💬 Mensaje:</div>
                <div class="field-value">${message}</div>
              </div>
              
              <div class="footer">
                <p>📅 Recibido el ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}</p>
                <p>Responde pronto para no perder este lead 🚀</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
        Nuevo Lead de BLACK OWL
        =======================
        
        Nombre: ${name}
        Correo: ${email}
        WhatsApp: ${phone}
        ${company ? `Empresa: ${company}` : ''}
        
        Mensaje:
        ${message}
        
        Recibido el ${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}
      `
    })

    if (error) {
      console.error('Error enviando correo:', error)
      return NextResponse.json(
        { error: 'Error enviando correo' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Correo enviado exitosamente', id: data?.id },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error en API contact:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
} 