## Clase 9

En este repositorio se encuentra el proyecto de Pixhelados para la clase 9 del programa de Front End Avanzado de Nucba.

## Pixhelados 🍨
Se trata de una simple aplicación web que contiene las típicas rutas de productos, productos anidados, contacto y login. Esta última con su funcionalidad de ruta privada.
La UI está desarrollada con la libreria: https://storybook.react95.io/?path=/story/anchor--default

![App Screenshot](https://res.cloudinary.com/dcatzxqqf/image/upload/v1657584185/coding/Readmes/Reaact/Clase-8/Clase-8-Main_or9msk.png)

## Temario de la clase

- Introducción a React Router
- React router v6: Instalación
- Componentes BrowserRouter, Routes y Route
- Declaración de rutas, 404, Navigate
- Link y NavLink
- Rutas anidadas y dinámicas.
- useParams
- Funcionalidades de React Router:  useLocation, useNavigate, useMatch.
- Protección de rutas: usuario logueado o usuario no logueado. Pixel Helados


## Utilización

Deben clonar este proyecto e iniciarlo en la rama Starter (esta misma pueden utilizarla en clase para ir completando lo faltante).

```bash
  git clone git@github.com:Nucba-React/Clase-9.git
```

En segundo paso, se mueven a la rama Pixhelados para tener el código final del proyecto.

```bash
  git checkout Pixhelados
```

Luego, instalan todas las dependencias necesarias para que funcione.

```bash
  npm install
```

Por último, inician el mismo con el siguiente comando:

```bash
  npm run start
```

## Estructura del proyecto

El proyecto está ideado para copiar y pegar los componentes con sus estilos. Mientras en clase se realiza toda la lógica vinculada a React Router.
En la carpeta components vamos a encontrar algunos archivos con lógica, y otros tantos de UI directa de la libreria.

Carpeta /
| Archivo    | Descripción                |
| :--------|:------------------------- |
| `index.js` | Theme inicial de la aplicación proveniente de react95. Se ordenan los providers y el BrowserRouter para que tenga acceso a toda la aplicación. |

Carpeta components

| Archivo    | Descripción                |
| :--------|:------------------------- |
| `Button.js` | Boton para reutilizar |
| `FieldSet.js` | Componente para contacto y login |
| `/input` | Componentes que forman al FieldSet |
| `LinkItem.js` | Rutas para el navbar con la lógica para determinar su estado active |
| `Navbar.js` | Componente Navbar de la aplicación |
| `ProductCard.js` | Estilos del card para la ruta /products con el contenido dinámico |
| `ProgressBar.js` | Componente que consume el hook de la libreria react95 y se usa en la 404 |
| `ProtectedRoute.js` | Componente encargado del manejo de las rutas protegidas |

Carpeta hooks
| Archivo    | Descripción                |
| :--------|:------------------------- |
| `useProgress.js` | Logica para el componente ProgressBar de react95 (Se debe mostrar la lógica pero no desarrollarla)  |

Carpeta context
| Archivo    | Descripción                |
| :--------|:------------------------- |
| ` AuthContext.js` | Archivo que maneja la lógica para utilizar en las rutas privadas |

Carpeta routes
| Archivo    | Descripción                |
| :--------|:------------------------- |
| `Routes.js` | Archivo que contiene todas las rutas de la app. Las protegidas, dínamicas, anidadas y 404. Se importa "Routes as ReactDomRoutes" para no tener conflictos con el nombre propio del archivo routes.js |

Carpeta data
| Archivo    | Descripción                |
| :--------|:------------------------- |
| `productsData.js` | Productos hardcodeados de /products |

Carpeta pages
| Archivo    | Descripción                |
| :--------|:------------------------- |
| `Contacto.js` | Página para complementar el header. Sin función alguna más que mostrar la navegación |
| `Error404.js` | Página destinada al error 404. Aquí es donde se utiliza el componente Progressbar. |
| `Home.js` | Home de la aplicación |
| `Login.js` | Página para iniciar sesión.  |
| `Product.js` | Página con el map de la data de los productos. |
| `Section.js ` | Página con una vista dínamica al ingresar a cada producto |
| `User.js` | Página para los usuarios que se registren correctamente |

Carpeta styles
| Archivo    | Descripción                |
| :--------|:------------------------- |
| `GlobalStyles.js` | Estilos globales de la aplicación  |
