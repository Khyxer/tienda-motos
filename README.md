# Axis Sports

![Logo](https://github.com/Khyxer/tienda-motos/raw/main/public/logo-main.svg)

![React](https://img.shields.io/badge/React-18.x-blue)

![Vite](https://img.shields.io/badge/Vite-5.x-646CFF)

![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38B2AC)

![License](https://img.shields.io/badge/License-MIT-green)

Una web de practica sobre una tienda en línea para la compra de motos. Este proyecto está construido con **React**, **Vite**, y **Tailwind CSS** para una experiencia rápida y estilizada.

## Descripción

Este proyecto es una tienda de motos en línea donde los usuarios pueden explorar una variedad de motos, ver detalles de cada modelo y simular el credito de una moto. Está construido utilizando **React** para el front-end, **Vite** como herramienta de construcción para un desarrollo rápido y **Tailwind CSS** para estilos personalizables.
Las motos estan en un archivo llamado motos.js dentro de la carpeta data.

## Características Principales

- 🏍️ Catálogo completo de motos
- 🔍 Filtrado por categorías
- 💰 Simulador de crédito
- 📱 Diseño responsive
- ⚡ Carga rápida gracias a Vite

## Tecnologías Usadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Vite**: Herramienta de construcción rápida para aplicaciones web.
- **Tailwind CSS**: Framework de CSS para crear interfaces personalizables y responsivas.
- **React Router**: Para la navegación entre las distintas páginas del sitio.
- **Flowbite**: Para algunos componentes.

## Instalación

Para instalar y ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/usuario/tienda-de-motos.git
   cd tienda-de-motos
   ```
2. Instala las dependencias:
    ```bash
    npm install
    ```
3. Inicia el proyecto:

    ```bash
    npm run dev
    ```
Se ejecutará un servidor local en `http://localhost:5173`

4. Si quieres acceder al servidor desde cualquier dispositivo en tu misma red ve al archivo `vite.config.js` y coloca este codigo

    ```js
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    export default defineConfig({
        plugins: [react()],
        server: {
            host: "0.0.0.0",
            port: 3000,
        },
    });
    ```
    
En el puerto coloca el que quieras, ahora al iniciar el servidor podras entrar desde cualquier dispositivo que este en tu misma red, solo deberas poner tu `Dirección IPv4` seguido de `:` y el puerto que hayas colocado

## Estructura del proyecto
    TIENDA-DE-MOTOS/
    ├── public/
    │   ├── icons/         # Iconos
    │   ├── marcas/        # Marcas
    │   ├── motos/         # Imagenes de las motos
    │   ├── productos/     # Imagenes de los productos
    │   ├── puntos/        # Puntos de venta fisicos
    │   ├── videos/        # Video promocional
    │   # Otros recursos
    ├── src/
    │   ├── components/    # Componentes reutilizables
    │   ├── pages/         # Páginas de la aplicación
    │   ├── data/          # Archivos con datos como arrays de objetos
    │   └── assets/        # Imágenes y recursos
    └── ...
## Uso
Una vez que la aplicación esté en ejecución, tendras acceso a:

- Ver una lista de motos disponibles con sus detalles.
- Filtrar las motos por categorías (por ejemplo, deportivas, cruiser, etc.).
- Simular el credito de una moto


## Vista Previa

![Logo](https://github.com/Khyxer/tienda-motos/raw/main/public/vista-previa.png)


[Ver Demo](https://tu-demo-en-vivo.com)

## Estado del Proyecto

🚧 Este proyecto está finalizado.


## Licencia

📝 Este proyecto está bajo la Licencia MIT - vea el archivo [LICENSE](LICENSE) para más detalles.

## Creditos
- [Banners, motos y videos promocionales de Yamaha](https://www.incolmotos-yamaha.com.co/home//)
