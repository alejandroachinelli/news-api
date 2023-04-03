# NewsAPI

El proyecto consta de dos partes

1. Una frontend la cual esta realizada en REACT (AppReact).
2. Otra backend que esta hecha en .NET (APINews).

Desde el backend consumimos la API https://newsapi.org/ para obtener los datos, luego desde la aplicacion de React consumimos la misma API hecha en .NET para mostrar los datos que devuelve la misma API que se consume en la aplicacion backend.

## Instalación

1. Clona este repositorio.
2. Primero tenes que ingresar a la carpeta APINews en donde existen dos opciones:
	* Si tenes **Visual Studio** instalado haciendo doble click en el archivo **newsapi-backend.sln**
	se te va a abrir el programa automaticamente, luego vas a la seccion de arriba que dice **Depurar** y 
	seleccionas la opcion que dice **Iniciar depuracion**.
	* Si no tenes Visual Studio instalado y solo tenes **Visual Studio Code**, podes ingresar a la 
	carpeta **newsapi-backend** dentro de **APINews**, haces click derecho dentro, abris una terminal, 
	y dentro de la terminal podes correr el comando `dotnet run`.
	El mismo comando pondra en funcionamiento la API.

3. Luego el siguiente paso, mientras esta funcionando la API, es abrir la carpeta **APPReact**, dentro hacemos 
click derecho y abrimos la terminal.

4. Para abrir el proyecto de React en Visual Studio Code, dentro de la terminal colocamos el comando `code .`,
si el comando no funciona la otra opcion es abrir la carpeta manualmente con Visual Code.

5. Una vez abierto el proyecto con Visual Code, abrimos una terminal en la seccion de arriba, hacemos click en **Terminal**
y luego en **Nueva terminal**.

6. Dentro de la terminal ejecuta el comando `npm install` para instalar las dependencias del proyecto.

7. Luego vamos a ir al archivo dentro del proyecto **'src/apis/newsapi.jsx'**. Dentro del mismo archivo podemos observar que
hay una ruta que se llama **baseURL** el cual contiene la ruta base de la API que esta corriendo. Podes corroborar que el puerto
que se esta usando **:7050** sea el mismo puerto en donde esta corriendo la API .NET en la terminal donde iniciaste el proyecto backend.

8. Si no es el mismo lo reemplazas en el archivo **newsapi.jsx** al puerto nuevo que tenes del backend.

9. Una vez corregido el puerto y corrido el comando npm install, en la terminal que tenemos abierta en Visual Code vamos a ingresar el comando `npm start`.

10. Si tenes corriendo el backend correctamente, configurado el archivo newsapi.jsx con el puerto correcto, y ya esta corriendo el proyecto React correctamente,
ya podes comenzar a utilizar la aplicacion correctamente.

## Uso

1. Asegúrate de tener el backend ejecutándose.
2. Ejecuta el comando `npm start` para iniciar el servidor local de React.
3. Abre tu navegador en la dirección `http://localhost:3000/` para ver el proyecto en acción.