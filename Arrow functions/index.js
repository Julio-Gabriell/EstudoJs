// Fácil 1: Transforme a função abaixo em uma Arrow Function:

// Fácil 2: Crie uma Arrow Function que receba um nome (string) e retorne "Bem-vindo, [nome]!".

// Médio 1: Escreva uma Arrow Function que receba dois números e retorne a soma deles. Atenção: Não use a palavra return e nem chaves {}.

// Médio 2: Se você tentar retornar um objeto diretamente assim: const getObj = () => { id: 1 };, vai dar erro ou retornar undefined. Como você ajusta a sintaxe para retornar o objeto { id: 1 } sem usar a palavra return?

// Difícil 1: Explique (ou demonstre com código) por que Arrow Functions não são recomendadas para criar métodos dentro de objetos literais que precisam acessar o this do próprio objeto.

// 1)

    const ola = () => "Ola, mundo";
    console.log(ola());

// 2)

    const bemVindo = (nome) => `Bem vindo ${nome}`;
    console.log(bemVindo("Julio"));

// 3)

    const soma = (num1, num2) => num1 + num2;
    console.log(soma(5, 5));

// 4)

    const getObj = (id) => ({id: 1});
    console.log(getObj())

// 5) Por que elas referenciariam ao objeto que foi chamado (botao por exemplo) e nao a sua origem (componete por exemplo)