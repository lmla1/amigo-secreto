# Aplicación de Sorteo de Amigo Secreto

Esta es una aplicación web sencilla que permite a los usuarios crear una lista de amigos y seleccionar aleatoriamente a un "amigo secreto". Los usuarios pueden agregar nombres a través de un campo de entrada, ver la lista de nombres añadidos y realizar un sorteo para determinar al amigo seleccionado. La validación de entradas asegura que los nombres sean significativos, y los resultados se muestran en la página.

## Características

- **Agregar nombres**: Los usuarios pueden escribir el nombre de un amigo en un campo de texto y agregarlo a una lista visible al hacer clic en "Adicionar".
- **Validar entrada**: Si el campo de texto está vacío, el programa mostrará una alerta solicitando un nombre válido.
- **Visualizar la lista**: Los nombres ingresados aparecerán en una lista debajo del campo de entrada.
- **Sorteo aleatorio**: Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.

## Estructura del Proyecto

El proyecto contiene los siguientes archivos y carpetas:

- `index.html`: Contiene la estructura básica de la aplicación y los elementos necesarios para la interacción del usuario.
- `app.js`: Incluye la lógica de la aplicación, manejando las funcionalidades de agregar nombres, validar entradas y realizar el sorteo aleatorio.
- `style.css`: Define los estilos para la presentación visual de la aplicación.
- `assets/`: Carpeta que contiene los gráficos e imágenes utilizados en la aplicación.

## Instalación

Para utilizar esta aplicación en tu máquina local, sigue estos pasos:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/lmla1/amigo-secreto.git
