[Link a producción](https://movie-gallery-rho.vercel.app/)

## Movie Gallery

Un equipo backend de una empresa relacionada con el mundo audiovisual, nos pide que desarrollemos un frontend para que sus clientes puedan gestionar su catálogo de películas.

Después de horas de conversación y el despiste del stakeholder hemos podido levantar algunos de los requisitos mínimos y vagos para implementar un MVP ( Mínimum Viable Product ).

También hemos hablado de la UI y nos deja espacio para proponer ideas pero nos ha enviado algunas referencias.

### Screenshots

![galery](./imgReadme/galeri.png)
![detall](./imgReadme/detall.png)
![Formulario](./imgReadme/Formulario.png)
![Modo movile](./imgReadme/modo%20movile%20galery.png)
![Modo movile Galery](./imgReadme/galery%20movile.png)

## Requisitos Funcionales (user stories)

> **VER** **GALERIA DE MOVIES (HTTP- GET - ‘/movies’)**
> Como usuario
> Quiero ver una galería de películas con su imagen, título y año de estreno
>
> - Podéis añadir mas campos en el objeto ‘movie’

> **FILTRO DE LA GALERIA DE MOVIES**
> Como usuario
> Quiero una entrada de texto
> para filtrar las películas por campos

> **VER FICHA DE DETALLE DE LA MOVIE (HTTP - GET - ‘/movies/:id’)**
> Como usuario
> Quiero que al hacer click en una película nos lleve a una página
> Para ver los detalles o ficha de la misma.
>
> - Los detalles deben mostrar la imagen, el título, el director, la sinopsis, y los campos que creáis necesarios

> **BORRAR UNA MOVIE DE LA GALERIA (HTTP - DELETE - ‘/movies/:id’)**
> Como usuario
> Quiero un botón o icono en cada película de la galería
> para borrarla de la lista

> **AÑADIR UNA MOVIE A LA GALERIA (HTTP - POST - ‘/movies’) → BODY**
> Como usuario
> Quiero un formulario con los campos necesarios
> para añadir una nueva película a la lista

> **EDITAR UNA MOVIE DEL CATÁLOGO (HTTP - PUT/PATCH - ‘/movies/:id’) → BODY**
> Como usuario
> Quiero un botón en capa película de la galería
> para mostrar un formulario de edición

> **AÑADIR UNA MOVIE A FAVORITAS**
> Como usuario
> Quiero que al hacer click en el botón de ‘favorita’ en cada peli
> para añadirla como favorita

> **VER GALERIA DE LAS MOVIES FAVORITAS**
> Como usuario
> Quiero un botón en el menú
> para poder ir a una galería de mis imágenes favoritas

![Trello](./imgReadme/trello-sprintfinal.jpg)
