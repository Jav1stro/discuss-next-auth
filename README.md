Nuevo proyecto de especie de reddit. Con Autorizacion next-auth, NextUI, Prisma y una db SQlite.

![Arquitectura](./architecture/image.png)

**_ Diseño del Proyecto: _**

Es siempre importante pensar desde antes cómo diseñar el proyecto.
Resolver desafíos de caché UPFRONT:
~ Identificar los diferentes tipos de data que van a cambiar en la app.
~ Encontrar los diferentes lugares donde esta data puede cambiar.

1. Instalar nextui y creción de un Provider que envuelve a la aplicación con NextUiProvider agregando el provider a layout.tsx

2. Creacion de prisma db npx prisma init --datasource-provider sqlit y de schema.prisma con los modelos necesarios para usar PrismaAdapter

3. Configuracion de next-auth y github OAuth
   ~ Es necesaria crear una aplicacion OAuth en el sitio web de Github.
   ~ Definir variables dentro .env.local con el secret y el github id.
   ~ instalar paquetes, se usan estas versiones que sabemos que funcionan así
   @auth/core@0.18.1 @auth/prisma-adapter@1.0.6 next-auth@5.0.0-beta.3

4. app/api/auth/[...nextauth]/ route.ts
   ~ Implementan manejadores de solicitudes de API (GET POST UPDATE) dentro de la app
   ~ Los servidores de Github van a intentar llegar a nuestra aplicación para gestionar la autenticacion

5. Auth con Server Actions
   Manejamos las funciones de next auth como server actions para tener un mejor control y organizacion del proyecto.

**Initial Design**
![initialDesign](./architecture/initialDesign.png)
 6. Identificar todas las rutas que nuestra aplicación va a tener y como va a funcionar la data 
 7. Creación de PATH HELPERS.
