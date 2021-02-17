## Sobre

Simulação de uma API REST de pagamentos 
com rotas públicas e protegidas (por token JWT).

## Objetivo
**Projeto para estudo**.

## Palavras-chave 
API, REST, ExpressJS, 
Sequelize, JWT, BCrypt, 
dotenv.

## Rodar aplicação 
npm run dev

## Arquivo .env
Criar arquivo .env contendo:

- SERVER_PORT=ESCOLHER (exemplo: 3001)
- PROTECTED_ROUTE_PREFIX=ESCOLHER (exemplo: /privado)

- DATABASE_DIALECT=ESCOLHER (exemplo: mysql)
- DATABASE_HOST=ESCOLHER (exemplo: localhost)
- DATABASE_PORT=ESCOLHER (exemplo: 3306)
- DATABASE_USERNAME=ESCOLHER
- DATABASE_PASSWORD=ESCOLHER
- DATABASE_SCHEMA=ESCOLHER (exemplo: MEU_BANCO)
- DATABASE_TABLE_USUARIO=Usuario
- DATABASE_TABLE_CHIP=Chip
- DATABASE_TABLE_PAGAMENTO=Pagamento

- PAYMENT_DEBIT_OPTION=DEBITO
- PAYMENT_CREDIT_OPTION=CREDITO
- PASSWORD_HASHING_FORCE=ESCOLHER (exemplo: 12)
- JWT_EXPIRATION=ESCOLHER (em milisegundos, exemplo: 3600000)
- JWT_SECRET=ESCOLHER (exemplo: Super_Segredo_2000)

## Gerenciar banco de dados

### Para criar o schema 
npx sequelize db:create

### Para dropar o schema
npx sequelize db:drop

### Para criar um script de migração
npx sequelize migration:create --name=NOME_DA_MIGRATION

### Para subir as migrações
npx sequelize db:migrate

### Para dropar as migrações
npx sequelize db:migrate:undo:all