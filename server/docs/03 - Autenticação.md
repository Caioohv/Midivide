

### Registro de usuários

Para registrar um usuário, deveremos coletar email, senha e nome do usuário, e enviá-los em uma requisição POST ao backend.

**POST** `/auth/register/start`
```
{
	name: 'Pancinha da roda',
	email: 'pancinha@yahoo.com',
	password: 'pancinha123'
}
```

O retorno dessa requisição será Status 201 para sucesso, 400 para erro.

Em seguida, o backend enviará um código de 6 dígitos para o email informado. O usuário deverá informar esse código ao front-end, que fará a seguinte requisição

**POST** `/auth/register/confirm`
```
{
	code: 123456
}
```
A requisição deverá conter o header `x-registration-target` com o valor sendo o email do usuário
```
'x-registration-target': 'pancinha@yahoo.com'
```

A Rota retornará Status 202 para sucesso, 400 para erro.

Nesse momento, a conta do usuário estará ativa e pode ser autenticada

### Login de usuários

Inicialmente, será feito o seguinte consumo:

**POST** /auth/login
```
{
	"email": "caio.vieira@gmail.com",
	"password": "testeaa"
}
```

A rota retornará status 200 para sucesso, com o seguinte corpo:
```
{
	"token": "Basic jy0h5wr26bky6whmddnuapn8bi8s0ossg"
}
```
O token será diferente para cada login e deverá ser usado para consumir as outras rotas da aplicação.

Caso erro, retornará status 401 