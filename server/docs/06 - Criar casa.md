## Criação de nova casa

Para criar uma casa, primeiramente, o usuário deverá fornecer o endereço para que o front end envie ao backend, de forma a buscar as coordenadas no backend: 

`GET /location`

Query String:
```javascript
address: {
	street: 'Rua Octavio Malvaccini',
	number: '580',
	neighborhood: 'São Pedro',
	city: 'Juiz de Fora',
	district: 'MG',
	postcode: '36037790'
}
```
o retorno dessa rota será:
```javascript
{
	location: {
		latitude: -21.778150,
		longitude: -43.394990
	}
}
```

O front end deverá exibir essas coordenadas em um mapa, para que o usuário confirme a localização

Ao confirmar a localização, prosseguiremos para criar uma casa.

Para isso, basta que o usuário esteja autenticado e faça o consumo da rota `POST /house`

O corpo dessa requisição segue o formato:

```js
{
	name: 'República DNA',
	vacancies: 5,
	isPublic: true,
	address: {
		street: 'Rua Octavio Malvaccini',
		number '580',
		neighborhood: 'São Pedro',
		city: 'Juiz de Fora',
		state: 'MG'
	},
	location: {
		latitude: -21.778150,
		longitude: -43.394990
	}

}
```



Para gerar um código, existem 26 letras disponíveis (A-Z) e 10 números disponíveis (0-9). 

O identificador é composto por 4 letras seguidas por 2 números, totalizando 6 caracteres.

Portanto, a probabilidade de gerar dois identificadores iguais consecutivamente é de 1 / (26^4 * 10^2)

Calculando essa expressão, vemos que a probabilidade de dois identificadores
serem iguais é de ≈ 0.00000000000000000000000000000000000000000000000000000000000000000327%

Essa probabilidade é extremamente baixa, praticamente próxima de zero. Logo, assumimos que o identificador é único.