## Criação de nova casa

Para isso, basta que o usuário esteja autenticado e faça o consumo da rota `POST /house`

O corpo dessa requisição segue o formato:

```js
{
  "name": "República DNA",
  "isPublic": true, 
  "vacancies": 10, 
  "address": {
    "state": "MG", 
    "city": "JUIZ DE FORA",
    "neighborhood": "SÃO PEDRO",
    "street": "RUA OCTAVIO MALVACCINI",
    "number": 580
  }
}
```
O retorno dessa requisição é:
```js
{
  house_code: ABCD12
}
```


Para gerar um código, existem 26 letras disponíveis (A-Z) e 10 números disponíveis (0-9). 

O identificador é composto por 4 letras seguidas por 2 números, totalizando 6 caracteres.

Portanto, a probabilidade de gerar dois identificadores iguais consecutivamente é de 1 / (26^4 * 10^2)

Calculando essa expressão, vemos que a probabilidade de dois identificadores
serem iguais é de ≈ 0.00000000000000000000000000000000000000000000000000000000000000000327%

Essa probabilidade é extremamente baixa, praticamente próxima de zero. Logo, assumimos que o identificador é único.