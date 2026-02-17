// Fácil 1: Dado const numeros = [10, 20, 30];, extraia o primeiro e o segundo número em variáveis chamadas x e y.

// Fácil 2: Dado const carro = { marca: "Fiat", modelo: "Uno" };, extraia marca e modelo em variáveis próprias.

// Médio 1: Dado o objeto const usuario = { nome: "Ana", endereco: { cidade: "São Paulo" } };, extraia a variável cidade diretamente em uma linha.

// Médio 2: Usando o mesmo objeto usuario acima, extraia a propriedade nome, mas faça com que a variável criada se chame nomeCompleto.

// Difícil 1: Crie uma função chamada exibirInfo que recebe um único objeto como argumento, mas na definição dos parâmetros da função, você já desestrutura para pegar id e status, definindo um valor padrão "Ativo" para o status caso ele não venha.

//1) 
 
    const numeros = [10, 20, 30];
    const [x, y] = numeros;
    console.log(x, y)

//2)

    const carro = { marca: "Fiat", modelo: "Uno" };
    const {marca, modelo} = carro;
    console.log(`Marca: ${marca}, Modelo: ${modelo}`);

// 3) 

    const usuario = { nome: "Ana", endereco: { cidade: "São Paulo" } };
    const {endereco: {cidade} } = usuario;
    console.log(cidade);

// 4)

    const {nome: NomeCompleto} = usuario;
    console.log(NomeCompleto);

// 5)

    function exibirInfo(user) {
        const {nome, id, status = "Ativo"} = user || {};
        return `Nome: ${nome}, id: ${id}, status: ${status}`;
    }

    const user = {nome: "Ana", id: 1};
    console.log(exibirInfo(user))