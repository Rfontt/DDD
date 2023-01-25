# Elementos táticos

É quando estamos falando sobre DDD e precisamos olhar mais a fundo um bounded context. Precisamos ser capazes de modelarmos de forma mais assertiva os seus principais componentes, comportamentos e individualidades, bem como suas relações.

## Entities

"Uma entidade é algo único que é capaz de ser alterado de forma contínua durante um longo período de tempo."

"Uma entidade é algo que possui uma continuidade em seu ciclo de vida e pode ser distinguida independente dos atributos que são importantes para a aplicação do usuário. Pode ser uma pessoa, cidade, carro, um ticket de loteria ou uma transação bancária."

Entidade = 

## Value Objects

"Quando você se preocupa apenas com os atributos de um elemento de um model, classifique isso como um Value Object."

"Trate o Value Object como imutável."

**EX:**

> É quando criamos um tipo que representa um conjunto de propriedades que fazem sentido para o sistema.

> Value object não tem um id.

> É imutável.

- Adress
  - Street
  - City
  - State
  - Zip Code

> O endereço não precisa ter um identificador, pois ele não é único.

- CPF
  - number
  - mask
