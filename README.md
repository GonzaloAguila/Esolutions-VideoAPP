# Challenge para ESolutions

## Orden de ejecucion para correr la app

1) clonar repositorio.
2) completar variables de entorno con los datos enviados.
3) npm install.
4) npm start*.

En localhost:4000 estara corriendo el cliente, mientras que en el puerto 9000 correra la api.

*Es necesesario tener instalado globalmente 'Concurrently': npm install -g concurrently
Como opcion alternativa (sobre todo en MAC y Linux), correr en dos terminales diferentes: npm run server / npm run client

### Para ver el JSON que devuelve la api, pegarle a los siguientes endpoints:

1) JSON pedido en el challenge: http://localhost:9000/api/categories 
2) Buscar una categoria: http://localhost:9000/api/categories/"name" 
3) Ver todos los videos: http://localhost:9000/api/videos
