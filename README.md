# VO3 Prácticas - Proyecto Individual

#### Descripción del Proyecto
El objetivo de este proyecto es construir una aplicación web de consultas sobre películas utilizando la API de The Movie Database (TMDb). La aplicación permitirá a los usuarios buscar películas en tiempo real y filtrar los resultados por año, calificación, tópico o categoría. Además, se debe implementar el manejo de errores y la validación de datos para mejorar la experiencia del usuario.

#### Pasos para la Implementación
1. **Instala el repositorio**
    - Crea una carpeta donde vayas a guardar el reporitorio usando el nombre de `Proyecto Final Individual`.
    - [Descargar Repositorio](https://github.com/vo3practicas/proyecto_final_individual.git) usando el comando `git clone https://github.com/vo3practicas/proyecto_final_individual.git`.
    - Abre la carpeta del repositorio es tu editor de código, abre la términal y asegurate de ubicarte en la misma ruta del Repo.
    - Crea una Branch (Rama) con tu nombre y apellido usando guiones de separación, sin acentos y en minúsculas, ej: juan-mecanico. Usa el comando `git branch "juan-mecanico"`.
    - Ahora debes seleccionar la Branch usando el siguiente código para trabajar en ella: `git checkout -b "juan-mecanico"`.

2. **Registro en The Open Movie Database (OMDb)**
    - Regístrate en la plataforma de OMDb para obtener una clave de API. Puedes registrarte en [OMDb API](https://www.omdbapi.com/apikey.aspx?__EVENTTARGET=freeAcct&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwUKLTIwNDY4MTIzNQ9kFgYCAQ9kFgICBw8WAh4HVmlzaWJsZWhkAgIPFgIfAGhkAgMPFgIfAGhkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYDBQtwYXRyZW9uQWNjdAUIZnJlZUFjY3QFCGZyZWVBY2N0oCxKYG7xaZwy2ktIrVmWGdWzxj%2FDhHQaAqqFYTiRTDE%3D&__VIEWSTATEGENERATOR=5E550F58&__EVENTVALIDATION=%2FwEdAAU%2BO86JjTqdg0yhuGR2tBukmSzhXfnlWWVdWIamVouVTzfZJuQDpLVS6HZFWq5fYpioiDjxFjSdCQfbG0SWduXFd8BcWGH1ot0k0SO7CfuulHLL4j%2B3qCcW3ReXhfb4KKsSs3zlQ%2B48KY6Qzm7wzZbR&at=freeAcct&Email=) y obtener tu clave de API.

3. **Configuración del Proyecto**
    - Crea un nuevo repositorio en tu plataforma de control de versiones preferida (por ejemplo, GitHub, GitLab, Bitbucket).
    - Configura tu entorno de desarrollo local para el proyecto utilizando herramientas como Node.js y npm o Yarn para gestionar dependencias, o bien puedes trabajar a código duro y sin usar librerías o frameworks.

4. **Desarrollo de la Aplicación**
    - Crea la estructura básica de archivos y carpetas para tu proyecto. Puedes seguir la arquitectura del proyecto que más te guste, recuerda usar nombres estándares y en inglés (con carpetas como `functions`, `components`, `assets`, etc.).
    - Implementa la funcionalidad de búsqueda en tiempo real utilizando la API de TMDb. Puedes utilizar herramientas como Axios o Fetch para realizar solicitudes HTTP.
    - Desarrolla la funcionalidad de filtrado por año, calificación, tópico o categoría.
    - Diseña la interfaz de usuario utilizando HTML, CSS y JavaScript. Puedes usar bibliotecas como React.js o Vue.js si prefieres un enfoque de desarrollo basado en componentes y consideras que lo puedes manejar con confianza, de otra manera se aconseja aplicar lo aprendido en clase y consultar cada vez que se tenga dudas o inconvenientes, evite la frustración y el estancamiento, somos comunidad y estamos para ayudarnos y darnos soporte.

5. **Estilos Personalizados**
    - Puedes utilizar CSS puro o preprocesadores CSS como Sass o Less para crear estilos personalizados para tu aplicación.
    - Se permite el uso de bibliotecas de estilos como Bootstrap, Materialize CSS o Tailwind CSS si deseas acelerar el proceso de diseño y desarrollo si lo consideras apropiado y te sientes en capacidad de hacerlo.

6. **Manejo de Errores y Validación de Datos**
    - Implementa la lógica necesaria para manejar errores de API, como solicitudes fallidas o datos no disponibles.
    - Valida los datos de entrada del usuario, como el año de lanzamiento o la calificación, para garantizar la integridad de los datos y mejorar la usabilidad de la aplicación.

7. **Pruebas y Depuración**
    - Realiza pruebas exhaustivas en tu aplicación para garantizar que todas las funcionalidades funcionen según lo previsto.
    - Utiliza herramientas de depuración del navegador y registra mensajes de error para identificar y solucionar problemas en tu código.

8. **Implementación del Buscador Persistente**
    - Agrega la funcionalidad para guardar las preferencias del usuario, como los filtros de búsqueda, en el almacenamiento local del navegador.
    - Implementa la capacidad de restaurar las preferencias del usuario al volver a cargar la página.

9. **Documentación y Entrega**
    - Documenta tu código, incluyendo comentarios descriptivos y una guía de instalación y uso para futuros desarrolladores.
    - Prepara una versión de producción de tu aplicación y despliégala en un servidor web o una plataforma de alojamiento en la nube.
    - Entrega tu proyecto finalizado según las especificaciones del curso o los requisitos del cliente.
    - La web será desplegada en `https://vo3practicas.github.io/proyecto_final_individual/`+`nombre-apellido/`.

#### Recursos Adicionales
- Consulta la documentación oficial de The Movie Database (TMDb) para obtener más detalles sobre cómo usar su API: [Documentación de TMDb](https://developer.themoviedb.org/reference/intro/getting-started)
- Explora tutoriales y recursos en línea sobre desarrollo web frontend, JavaScript, HTML y CSS para mejorar tus habilidades y obtener inspiración para tu proyecto.

#### Clausula final
- Se permite el uso de librerías, entornos de desarrollo y generadores de código, pero se recomienda entender la lógica aplicada pues al final de debe presentar y defender el proyecto explicando cada paso, reto y solución aplicada al desarrollo del mismo.
- Se puede copiar código, consultar comunidades, blogs, otros alumnos, profesor, pero siempre con la ética de ser consciente de que si no se entiende lo que se hizo, puede tener consecuencias irreversibles en la aprobación del mismo, en una empresa sos el único responsable de lo que haces o dejas de hacer.
- Este proyecto quedará disponible al público para ser usado como parte de tu portafolio, da tu mejor esfuerzo y recuerda, estamos iniciando, siempre se puede mejorar, nunca lo sabremos todo, una buena actitud y disposición te abrírá caminos y te brindará la correcta orientación al crecimiento.

Con estos pasos y requisitos, estarás listo para desarrollar tu proyecto final de consultas de películas con la API de The Movie Database. ¡Buena suerte en tu desarrollo!
