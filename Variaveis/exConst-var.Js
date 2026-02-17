// 1. let vs const
// Fácil 1: Declare uma constante chamada nome com o seu nome e uma variável idade com sua idade. Em seguida, tente alterar o valor da idade para um novo número.

// Fácil 2: O código const cidade = "Rio"; cidade = "SP"; vai gerar erro? Se sim, reescreva-o da forma correta para permitir a mudança.

// Médio 1: Crie um objeto const pessoa = { nome: "João" };. Tente alterar a propriedade nome para "Maria". O código roda ou quebra? Explique o porquê em um comentário.

// Médio 2: Dentro de um bloco if (true) { ... }, declare uma variável usando let e tente acessá-la fora do bloco (depois do fechamento das chaves). O que acontece?

// Difícil 1: Temos um loop for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 1000); }. Ele imprime "3, 3, 3" ao invés de "0, 1, 2". Como resolver esse problema de escopo apenas trocando o tipo de declaração da variável i?

// 1)

    const nome = { nome:"Julio", idade: 18};
    nome.idade = 19;
    console.log(nome.idade);

// 2)Sim

    const cidades = { cidade: "Rio de Janeiro"};
    cidades.cidade = "São Paulo";
    console.log(cidades.cidade);

// 3) Roda, pois muda a propriedade e não a referência

    const pessoa = { nome: "João"};
    pessoa.nome = "Maria";
    console.log(pessoa.nome);

// 4) Não acontece nada pois o let esta declarado dentro do bloco do if (só existe ali), sendo assim, não da pra acessar de fora

    if (true) {
        let segredo = "123";
    }

    // console.log(segredo);

// 5) 

    for (let i = 0; i < 3; i++) {
        setTimeout(() => console.log(i), 1000);
    }