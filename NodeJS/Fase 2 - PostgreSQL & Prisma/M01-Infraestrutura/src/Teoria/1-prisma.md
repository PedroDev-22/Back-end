O prisma é composto por três partes:

- Prisma Schema: Um arquivo declarativo (schema.prisma) onde você define o modelo dos seus dados. Você escreve lá: "Quero uma tabela Tarefas com id, titulo e concluida", e o Prisma traduz isso para SQL puro.

- Prisma Client: É uma biblioteca gerada automaticamente que oferece autocompletar e verificação de tipos (Type-safety) para suas consultas. Se você tentar buscar uma coluna que não existe no banco, o TypeScript nem compila.

- Prisma Migrate: A ferramenta que lê o seu esquema e aplica as alterações no banco de dados (o SQL DDL).