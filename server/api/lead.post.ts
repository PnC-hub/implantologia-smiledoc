import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, phone, email, comune, message, privacy, pageSource } = body

  if (!name || !phone || !privacy) {
    throw createError({ statusCode: 400, message: 'Campi obbligatori mancanti' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'localhost',
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER || 'noreply@implantologiasmiledoc.it',
      pass: process.env.SMTP_PASS || '',
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const htmlBody = `
    <h2>Nuovo contatto dal sito Implantologia Smiledoc</h2>
    <table style="border-collapse:collapse;width:100%;max-width:600px;">
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Sorgente</td><td style="padding:8px;border:1px solid #ddd;">${pageSource || 'Homepage Implantologia'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Nome</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Telefono</td><td style="padding:8px;border:1px solid #ddd;">${phone}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email || 'Non fornita'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Comune</td><td style="padding:8px;border:1px solid #ddd;">${comune || 'Non specificato'}</td></tr>
      <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;">Situazione</td><td style="padding:8px;border:1px solid #ddd;">${message || 'Non descritta'}</td></tr>
    </table>
    <p style="margin-top:16px;color:#888;font-size:12px;">Lead generato da: implantologiasmiledoc.it — Pagina: ${pageSource || 'Homepage'}</p>
  `

  try {
    await transporter.sendMail({
      from: `"Smiledoc Implantologia" <${process.env.SMTP_USER || 'noreply@implantologiasmiledoc.it'}>`,
      to: 'rec.monterotondo@smiledoc.it',
      cc: 'direzione@smiledoc.it',
      subject: `[Implantologia Smiledoc] Nuovo contatto: ${name} - ${comune || 'N/D'}`,
      html: htmlBody,
    })
  } catch (err) {
    console.error('Email send error:', err)
    throw createError({ statusCode: 500, message: 'Errore nell\'invio della richiesta' })
  }

  return { success: true, message: 'Richiesta inviata con successo' }
})
