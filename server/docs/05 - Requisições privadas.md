### Requisições Privadas

Requisições, como a `GET /user`, que dependem de ter um usuário logado, deverão enviar um header "Authorization" para o backend, com seu valor sendo `Basic *Token*`, para que ocorram normalmente.

O Token é obtido através da rota `POST /auth/login`.

Caso o token seja inválido ou esteja expirado, a requisição retornará 401.
Caso isso ocorra, o usuário deve ser redirecionado ao login.

A cada utilização do token, sua expiração é acrescida em 15 minutos.