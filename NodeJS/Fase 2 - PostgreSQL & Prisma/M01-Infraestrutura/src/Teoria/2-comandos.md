npx prisma migrate dev --name add_categoria

- prisma migrate: É o componente que gerencia o estado do seu banco de dados. Ele não apaga o banco (a menos que você peça); ele o "evolui" de uma versão para outra.

- dev: Indica que estamos em ambiente de desenvolvimento. O Prisma assume que você pode estar mudando o schema a cada 5 minutos. Ele checa o banco, cria a migração e aplica ela imediatamente para você.

- --name add_categoria: Isso é versionamento. O Prisma cria uma pasta dentro de prisma/migrations com um carimbo de data/hora (timestamp). O nome que você escolhe (add_categoria) serve para que, ao olhar o seu código daqui a 6 meses, você saiba o que aquela alteração fez. É como um "commit" do Git, mas para o seu banco de dados.