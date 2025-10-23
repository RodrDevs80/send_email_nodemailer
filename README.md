# Servicio de Correo Electrónico

Un servicio backend robusto para envío de correos electrónicos construido con Node.js, Express y Nodemailer, acompañado de un frontend en React.

## 🚀 Características

- **Backend Express**: API RESTful con configuración moderna
- **Servicio de Emails**: Integración con Nodemailer para Gmail
- **Frontend React**: Interfaz moderna y responsive
- **Seguridad**: Configuración CORS y límites de payload
- **Logging**: Morgan para registro de solicitudes
- **Variables de Entorno**: Configuración segura con dotenv

## 📋 Prerrequisitos

- Node.js 18+
- pnpm (recomendado) o npm
- Cuenta de Gmail con contraseña de aplicación

## 🛠️ Instalación

### Backend

1. Clona el repositorio:

```bash
git clone <tu-repositorio>
cd servicio_de_correo2
```

2. Instala dependencias:

```bash
pnpm install
```

3. Configura las variables de entorno:

```bash
cp .env.example .env
```

4. Configura tu archivo `.env`:

```env
PORT=3000
RAIZ=/api/v1
USER_GMAIL=tu-email@gmail.com
PASS_APP=tu-contraseña-de-aplicacion
```

### Frontend

```bash
cd frontend
pnpm install
```

## 🚀 Uso

### Desarrollo

**Backend:**

```bash
pnpm run dev
```

**Frontend:**

```bash
cd frontend
pnpm run dev
```

### Producción

**Backend:**

```bash
pnpm start
```

**Frontend:**

```bash
cd frontend
pnpm build
pnpm preview
```

## 📡 API Endpoints

### Envío de Email

- **POST** `/api/v1/sendEmail`

**Body:**

```json
{
  "to": "destinatario@email.com",
  "subject": "Asunto del mensaje",
  "text": "Cuerpo del mensaje"
}
```

**Respuesta Exitosa:**

```json
{
  "status": 200,
  "message": "Se envió de manera exitosa un email al correo: destinatario@email.com"
}
```

**Respuesta de Error:**

```json
{
  "status": 400,
  "error": "Error al enviar el email al correo: destinatario@email.com"
}
```

## 🔧 Configuración de Gmail

1. Activa la verificación en 2 pasos en tu cuenta de Google
2. Genera una contraseña de aplicación:
   - Ve a [Google Account Settings](https://myaccount.google.com/)
   - Seguridad → Verificación en 2 pasos → Contraseñas de aplicación
   - Genera una contraseña para "Mail"
   - Úsala en la variable `PASS_APP`

## 💻 Integración con Otros Proyectos

### Ejemplo de Uso en Frontend

```javascript
// Función para enviar email desde cualquier aplicación
const sendEmail = async (emailData) => {
  try {
    const response = await fetch("http://localhost:3000/api/v1/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error enviando email:", error);
    throw error;
  }
};

// Uso
const emailData = {
  to: "usuario@ejemplo.com",
  subject: "Bienvenido a nuestra plataforma",
  text: "Gracias por registrarte en nuestro servicio.",
};

sendEmail(emailData)
  .then((response) => console.log("Email enviado:", response))
  .catch((error) => console.error("Error:", error));
```

### Integración en Express

```javascript
// En tu archivo de rutas principal
import sendEmailRoutes from "./routes/sendEmail.route.js";

app.use("/api/email", sendEmailRoutes);
```

### Uso como Módulo

```javascript
// service/emailService.js
import sendEmail from "./service/nodemailer.service.js";

export class EmailService {
  static async sendWelcomeEmail(userEmail, userName) {
    const subject = "Bienvenido a nuestra plataforma";
    const text = `Hola ${userName}, gracias por registrarte.`;

    return await sendEmail(userEmail, subject, text);
  }

  static async sendNotificationEmail(userEmail, message) {
    const subject = "Nueva notificación";
    const text = `Tienes una nueva notificación: ${message}`;

    return await sendEmail(userEmail, subject, text);
  }
}

// Uso en controladores
import { EmailService } from "../service/emailService.js";

export const welcomeUser = async (req, res) => {
  try {
    const { email, name } = req.body;
    await EmailService.sendWelcomeEmail(email, name);

    res.status(200).json({ message: "Email de bienvenida enviado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
```

## 🏗️ Estructura del Proyecto

```
servicio_de_correo2/
├── controller/
│   └── sendEmail.controller.js
├── routes/
│   ├── index.js
│   └── sendEmail.route.js
├── service/
│   └── nodemailer.service.js
├── frontend/
│   ├── src/
│   │   ├── EmailForm.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
├── index.js
├── package.json
└── pnpm-lock.yaml
```

## 🔒 Variables de Entorno

| Variable   | Descripción                       | Valor por Defecto |
| ---------- | --------------------------------- | ----------------- |
| PORT       | Puerto del servidor               | 3000              |
| RAIZ       | Prefijo de rutas API              | /api/v1           |
| USER_GMAIL | Email de Gmail del remitente      | -                 |
| PASS_APP   | Contraseña de aplicación de Gmail | -                 |

## 📦 Dependencias Principales

### Backend

- **express**: Framework web
- **nodemailer**: Servicio de envío de emails
- **cors**: Middleware para CORS
- **morgan**: Logger de HTTP
- **dotenv**: Manejo de variables de entorno

### Frontend

- **react**: Biblioteca de UI
- **vite**: Build tool y dev server
- **tailwindcss**: Framework de CSS

## 🐛 Solución de Problemas

### Error de Autenticación de Gmail

- Verifica que la verificación en 2 pasos esté activada
- Usa la contraseña de aplicación, no tu contraseña normal
- Asegúrate de que el email esté correcto

### Error CORS

- Verifica que el frontend esté en el puerto correcto
- Revisa la configuración CORS en el backend

### Email No Llega

- Revisa la bandeja de spam
- Verifica los logs del servidor
- Confirma que los datos del destinatario sean correctos

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👨‍💻 Autor

Carlos E. Rodriguez
Desarrollado con ❤️ usando Node.js y React.
