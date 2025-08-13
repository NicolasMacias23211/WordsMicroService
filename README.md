# Words MicroService

Este microservicio te permite encontrar todas las palabras posibles que se pueden formar a partir de un conjunto de letras dado. Utiliza la [API de Datamuse](https://www.datamuse.com/api/) como fuente de palabras y expone un endpoint REST para recibir las letras y devolver las palabras posibles.

## ¿Qué hace?

- Recibe un arreglo de letras mediante una petición POST.
- Devuelve todas las palabras válidas que se pueden formar usando solo esas letras (cada letra solo puede usarse la cantidad de veces que aparece en el arreglo).
- Utiliza Express.js y TypeScript.

## ¿Cómo funciona?

1. El servicio recibe una petición POST en `/get-words` con un cuerpo JSON que contiene un arreglo de letras.
2. Obtiene una lista de palabras desde la API de Datamuse.
3. Para cada palabra, verifica si se puede formar usando únicamente las letras proporcionadas.
4. Devuelve una respuesta JSON con el total de palabras posibles y la lista de esas palabras.

## Ejemplo de petición
POST /get-words
Content-Type: application/json

{
  "letters": ["a", "p", "p", "l", "e"]
}

## Ejemplo de respuesta
{
  "total": 2,
  "words": ["apple", "pal"]
}

## ¿Cómo ejecutar el proyecto?
1. Clona el repositorio:
  git clone <url-del-repositorio>
  cd ArrayDePalabras
2. Instala las dependencias:
  npm install
3. Ejecuta el servicio:
  npm run build -> (Este paso transpila el codigo TypeScript a Codigo JavaScript)
  npm start -> (Inicia el servidor)

Requisitos
Node.js >= 14
npm
