import express, { request, response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan";
import helmet from "helmet";

// Inicialización de la Aplicación Express
const app = express();

// Configuración de CORS
app.use(
  cors({
    credentials: true, // Permite el envío de cookies
    origin: process.env.FRONTEND_URL, // Permite solicitudes desde el frontend especificado
  })
);

// configuran de middleware
app.use(express.json()); // Permite manejar cuerpos JSON en las solicitudes
app.use(cookieParser()); // Permite manejar cookies en las solicitudes
app.use(morgan("combined")); // Registra solicitudes HTTP en la consola
app.use(
  helmet({
    crossOriginResourcePolicy: false, // Configura políticas de seguridad para recursos de origen cruzado
  })
);

// Definición del puerto
const PORT = process.env.PORT || 8080;

// Ruta principal para verificar el estado del servidor
app.get("/", (request, response) => {
  // Respuesta del servidor al cliente
  response.json({
    message: `Server is running on port ${PORT}`, // Mensaje indicando que el servidor está en funcionamiento
  });
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
