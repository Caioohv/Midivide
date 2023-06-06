### Configurar o banco de dados

O banco de dados é configurado no momento que você executa o comando `npm run setup`
Caso não ocorra, use o comando `npm run db-setup`

Lembre-se de copiar os templates para a pasta config e atualizar as informações

Para criar uma conta local de maneira rápida, rode o comando `npm run create-local-account`

O Login (já ativo) inicial criado é:

```
User: midivide@midivide.com
Password: midivide
```

Para zerar tudo, basta rodar o comando `npm run db-reset`

Obs: **NUNCA** rode o db-seed caso o banco tenha dados inseridos. Caso queira rodar o db-seed, use o db-reset antes.