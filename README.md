Nuevo proyecto de especie de reddit. Con Autorizacion next-auth, NextUI, Prisma y una db SQlite.

![Arquitectura](./architecture/image.png)

*** Diseño del Proyecto: ***

Es siempre importante pensar desde antes cómo diseñar el proyecto.
Resolver desafíos de caché UPFRONT: 
    ~ Identificar los diferentes tipos de data que van a cambiar en la app.
    ~ Encontrar los diferentes lugares donde esta data puede cambiar.

1. Instalar nextui y creción de un Provider que envuelve a la aplicación con NextUiProvider agregando el provider a layout.tsx