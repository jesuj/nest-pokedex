<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo
1. Clonar el repositorio
2. Ejecutar
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datoss
```
docker-compose up -d
```
5. Clonar el archivo __.env.example__ y renombrar la copia a ```.env```

6. Llenar las variables de entorno definidas en el ```.env```

7. Ejecutar la aplicacion en dev:
```
yarn start:dev
```

9. Reconstruir la base de datos con la semilla(por defecto 600 pokemones)
```
http://localhost:3000/api/v2/seed
```
10. Especificar una determinada cantidad de seed (Maximo 100000)
```
http://localhost:3000/api/v2/seed?limit=100
```
# Stack usado
* MongoDB
* Nest
