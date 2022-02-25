# Práctica4 PAT - API-REST de Rick y Morty
Esta página consiste en un buscador de todos los personajes que aparecen en la serie de dibujos animados Rick y Morty.
El enlace a la página principal se puede encontrar en: https://menendez6.github.io/PAT4-APIREST/

# Intrucciones

## Objetivo de la práctica

El alumno empleando los conocimientos adquirido en el aula sobre 
HTML, CSS y Javascript, creará un documento web que permita 
interaccionar con una API REST y visualice en el documento la información.
El documento empleará el Framework CSS Bootstrap.

La programación en Javascript incluirá:

- Uso de llamadas asíncronas a un API Rest
- Uso de interacción al DOM del documento para visualizar la información

# Explicación de la práctica
La práctica, actualmente, está formada por una única página web que llama a la api https://rickandmortyapi.com/api. La página muestra los diferentes datos que obtiene de la API, que son personajes de la serie Rick y Morty, en un formato fácil de entender y visualizar para el usuario. Además, el usuario podrá filtrar los resultados por nombre, estado, tipo, género o especie. Por último, como son muchos resultados, se implementa paginación para que únicamente haya 20 resultados por página y sea más fácil para el usuario la visualización.

# Documentos

- **carousel.html**: esta página contiene una página, que actualmente no se utiliza, la cual consiste en una carrusel para decidir entre visualizar caracteres, localizaciones o episodios. 

- **index.html**: Esta es la página principal, en la que se visualiza y filtra la información. Contiene imágenes, el formulario en la parte superior para el filtrado, la tabla en la que se muestran los resultados y la paginación para ver diferentes páginas.

- **api.js**: Documento javascript que nos permite conectarnos a la api y extraer los datos necesarios además de modificar index.html para su representación.
