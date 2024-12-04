# Technical Layout Test

Este proyecto es una aplicación web que utiliza JavaScript, HTML, SCSS y Webpack para ofrecer una interfaz moderna y funcional. Está diseñado para facilitar el desarrollo en un entorno modular y escalable.

## Requisitos

- Node.js (v14 o superior)
- npm (v6 o superior) o yarn (v1.22 o superior)

## Instalación

1. Clona el repositorio:

    ```bash
    git clone https://github.com/Neptali-Ricardo/technical-layout-test.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd technical-layout-test
    ```

3. Instala las dependencias:

    Con npm:
    ```bash
    npm install
    ```

    Con yarn:
    ```bash
    yarn install
    ```

## Ejecución

Para ejecutar el proyecto en un entorno de desarrollo, utiliza el siguiente comando:

Con npm:
```bash
npm run dev
```

Esto iniciará un servidor de desarrollo y abrirá la aplicación en tu navegador predeterminado.

## Compilación

Para compilar el proyecto para producción, utiliza el siguiente comando:

Con npm:
```bash
npm run build
```

Con yarn:
```bash
yarn build
```

Esto generará los archivos compilados en la carpeta `dist`.

## Estructura del Proyecto

- `src/`: Contiene el código fuente del proyecto.
  - `index.js`: Punto de entrada principal de la aplicación.
  - `scss/`: Carpeta que contiene los archivos SCSS.
- `dist/`: Carpeta que contiene los archivos compilados y generados.
  - `assets/`: Carpeta que contiene los activos estáticos del proyecto.
    - `images/`: Imágenes del proyecto.
    - `icons/`: Iconos del proyecto.
  - `CSS/`: Contiene el archivo `style.css` generado.
  - `bundle.js`: Archivo de JavaScript compilado.
  - `index.html`: Archivo HTML de salida.
- `webpack.config.js`: Archivo de configuración de Webpack.


### Observaciones:
1. Instrucciones de Ejecución:
   - Asegúrate de que el comando `npm run dev` esté correctamente configurado en tu archivo `package.json` bajo la sección `scripts`.
   - Verifica que el servidor de desarrollo esté configurado para abrir automáticamente la aplicación en el navegador.

2. Instrucciones de Compilación:
   - Asegúrate de que el comando `npm run build` esté correctamente configurado en tu archivo `package.json` bajo la sección `scripts`.
   - Verifica que el comando `yarn build` sea equivalente a `npm run build` y esté correctamente configurado si estás usando Yarn.

### Ejemplo de configuración en `package.json`:

```json
{
  "scripts": {
    "dev": "webpack serve --mode development",
    "build": "webpack --mode production"
  }
}

## Contribución

¡Tu ayuda es bienvenida! Sigue estos pasos para contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama:
    ```bash
    git checkout -b feature/nueva-funcionalidad
    ```
3. Realiza tus cambios y haz un commit:
    ```bash
    git commit -am 'Agrega nueva funcionalidad'
    ```
4. Sube tus cambios a tu fork:
    ```bash
    git push origin feature/nueva-funcionalidad
    ```
5. Abre un Pull Request.

## Licencia

Este proyecto no tiene licencia definida. Si deseas usarlo, por favor contáctame para obtener más detalles.