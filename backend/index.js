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

app.get("/", (request, response) => {
  // server to cliente
  response.json({
    message: `Sever is running ${PORT}`,
  });
});

// Iniciar el servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
