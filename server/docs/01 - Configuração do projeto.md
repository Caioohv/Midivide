### General

As configs de General são informações sobre a aplicação
Basta seguir o padrão do template;

### Email

As configurações de Email são relativas ao serviço de envio de email.
Para testar, crie uma conta no `mailtrap.io` e use as credenciais fornecidas.
O único que deve ser mudado é o usuário e senha.

### Geolocation API

As configurações são relativas ao serviço de geolocalização.
Para testar, crie uma conta no `geoapify.com` e use as credenciais fornecidas.
O único que deve ser mudado é o api key.


### Database

As configurações de Database são informações relacionadas ao banco de dados
da aplicação. Use o MySQL e coloque suas credenciais.


Para configurar tudo duma vez, basta rodar `npm run setup`
Esse comando instala as dependências (módulos), configura o banco de dados e faz a cópia dos templates para a pasta config (basta alterar as informações presentes)
