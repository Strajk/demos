@from: https://egghead.io/playlists/build-a-full-stack-app-with-prisma-2-7c81

#### Prep DB
```
docker-compose up -d # detached mode
docker-compose ps # check if running
docker-compose run db bash # `db` from docker-compose file
psql --host=db --username=alice --dbname=myawesomedb # use password from docker-compose file
# ctrl+d to exit
docker-compose down # data will stay in ./pgdata, as specified in d-c file
```

#### Prep Prisma

https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/generating-prisma-client
```
npx prisma init
npx prisma migrate save --name »name« --experimental # prisma/migrations/»timestamp«/* will be generated 
npx prisma migrate up --experimental
npx prisma generate # will generate client code into node_modules
```

#### UML

```
npx prisma-uml ./prisma/schema.prisma
npx prisma-uml ./prisma/schema.prisma > uml-erd.plantuml
npx prisma-uml ./prisma/schema.prisma --output svg --file uml-erd.svg
npx prisma-uml ./prisma/schema.prisma --output png --file uml-erd.png
npx prisma-uml ./prisma/schema.prisma --server http://localhost:8080
```
