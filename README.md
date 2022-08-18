# PI-Food

In this application you will be able to see different food recipes, with their information, it has functionalities such as filtering by type of dates, it also has a search engine that brings more recipes from the external API Sponcoolar. You can create your own recipes, and then you can update or delete this recipes.

## Installation
To install and run this proyect just type and execute

```bash
npm install
```
## Content

<ul>
  <li>You can save recipes in yours favorite list.</li>
  <li>You can create your own recipes.</li>
  <li>Your recipes can be modified and deleted</li>
</ul>

## Deploy

If you want to see the deploy of this proyect deployed, you can visit [API Food wep-page](https://pi-foods-five.vercel.app/)

NOTE: Have a little CORS problems when you try to create a new recipe. In localhost work's.


## How start in localhost

For Start the back-end:

Change to /api and: 

```bash
npm start
```

For start the Front-End:

Change to /client and: 

```bash
npm start
```

Actualmente las versiónes necesarias son:

 * __Node__: 12.18.3 o mayor
 * __NPM__: 6.14.16 o mayor

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate cuenta con dos carpetas: `api` y `client`. En estas carpetas estará el código del back-end y el front-end respectivamente.

En `api` crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado en la subida a github, ya que contiene información sensible (las credenciales).

Adicionalmente será necesario que creen desde psql una base de datos llamada `food`

El contenido de `client` fue creado usando: Create React App.



