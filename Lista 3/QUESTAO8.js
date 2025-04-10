// Classe que representa um nó (node) na lista encadeada
class No {
    constructor(nome, idade) {
        this.nome = nome;  // Armazena o nome da pessoa
        this.idade = idade; // Armazena a idade da pessoa
        this.proximo = null; // Aponta para o próximo nó na lista
    }
}

// Classe que representa a lista simplesmente encadeada
class ListaEncadeada {
    constructor() {
        this.cabeca = null; // Inicia a lista com a cabeça (primeiro nó) como null
    }

    // Método para adicionar uma nova pessoa à lista
    adicionar(nome, idade) {
        const novoNo = new No(nome, idade); // Cria um novo nó
        if (this.cabeca === null) {
            this.cabeca = novoNo; // Se a lista estiver vazia, o novo nó será o primeiro
        } else {
            let atual = this.cabeca;
            // Percorre até o último nó da lista
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNo; // Adiciona o novo nó no final da lista
        }
    }

    // Método para imprimir a lista
    listar() {
        let atual = this.cabeca;
        let resultado = [];
        // Percorre a lista e coleta os dados para exibir
        while (atual !== null) {
            resultado.push(`Nome: ${atual.nome}, Idade: ${atual.idade}`);
            atual = atual.proximo;
        }
        console.log(resultado.join(" -> "));
    }

    // Método para retornar uma nova lista ordenada por nome (ordem alfabética)
    ordenarPorNome() {
        let listaOrdenada = new ListaEncadeada();
        let dados = [];
        let atual = this.cabeca;
        
        // Armazenar os dados da lista em um array
        while (atual !== null) {
            dados.push({ nome: atual.nome, idade: atual.idade });
            atual = atual.proximo;
        }
        
        // Ordenar os dados por nome (ordem alfabética)
        dados.sort((a, b) => a.nome.localeCompare(b.nome));

        // Criar uma nova lista com os dados ordenados
        dados.forEach(dado => listaOrdenada.adicionar(dado.nome, dado.idade));

        return listaOrdenada; // Retorna a lista ordenada por nome
    }

    // Método para retornar uma nova lista ordenada por idade (do menor para o maior)
    ordenarPorIdade() {
        let listaOrdenada = new ListaEncadeada();
        let dados = [];
        let atual = this.cabeca;
        
        // Armazenar os dados da lista em um array
        while (atual !== null) {
            dados.push({ nome: atual.nome, idade: atual.idade });
            atual = atual.proximo;
        }

        // Ordenar os dados por idade (do menor para o maior)
        dados.sort((a, b) => a.idade - b.idade);

        // Criar uma nova lista com os dados ordenados
        dados.forEach(dado => listaOrdenada.adicionar(dado.nome, dado.idade));

        return listaOrdenada; // Retorna a lista ordenada por idade
    }
}

// Teste da implementação

// Criar a lista de pessoas
let lista = new ListaEncadeada();

// Adicionar algumas pessoas à lista
lista.adicionar("Ana", 25);
lista.adicionar("Carlos", 18);
lista.adicionar("Maria", 30);
lista.adicionar("João", 22);
lista.adicionar("Beatriz", 27);

// Listar a lista original
console.log("Lista Original:");
lista.listar();

// Ordenar a lista por nome (alfabética)
let listaOrdenadaPorNome = lista.ordenarPorNome();
console.log("\nLista Ordenada por Nome (Alfabética):");
listaOrdenadaPorNome.listar();

// Ordenar a lista por idade (do menor para o maior)
let listaOrdenadaPorIdade = lista.ordenarPorIdade();
console.log("\nLista Ordenada por Idade (Menor para Maior):");
listaOrdenadaPorIdade.listar();
