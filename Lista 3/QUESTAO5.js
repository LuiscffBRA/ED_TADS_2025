// Classe Nodo: Representa cada elemento na lista.
class Nodo {
    constructor(valor) {
        // O valor que será armazenado no nó.
        this.valor = valor;

        // O ponteiro para o próximo nó. Inicialmente, é null.
        this.proximo = null;
    }
}

// Classe ListaSimples: Representa a lista encadeada.
class ListaSimples {
    constructor() {
        // Inicialmente, a lista está vazia, então a cabeça é null.
        this.cabeca = null;
    }

    // Método para adicionar um novo elemento no final da lista.
    adicionar(valor) {
        const novoNodo = new Nodo(valor);

        if (this.cabeca === null) {
            this.cabeca = novoNodo;
        } else {
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNodo;
        }
    }

    // Método para listar todos os elementos da lista.
    listar() {
        let elementos = [];
        let atual = this.cabeca;

        while (atual !== null) {
            elementos.push(atual.valor);
            atual = atual.proximo;
        }

        console.log("Elementos da lista:", elementos.join(", "));
    }

    // Método para embaralhar os elementos da lista.
    embaralhar() {
        // Primeiro, percorremos a lista e colocamos todos os elementos em um array.
        let elementos = [];
        let atual = this.cabeca;
        while (atual !== null) {
            elementos.push(atual.valor);
            atual = atual.proximo;
        }

        // Agora, aplicamos o algoritmo de Fisher-Yates para embaralhar o array.
        for (let i = elementos.length - 1; i > 0; i--) {
            // Escolhe um índice aleatório entre 0 e i.
            const j = Math.floor(Math.random() * (i + 1));

            // Troca os elementos de índice i e j.
            [elementos[i], elementos[j]] = [elementos[j], elementos[i]];
        }

        // Após embaralhar o array, reconstruímos a lista com os elementos embaralhados.
        let novoNodo;
        for (let i = 0; i < elementos.length; i++) {
            if (i === 0) {
                // O primeiro nó será a cabeça da lista.
                this.cabeca = new Nodo(elementos[i]);
                novoNodo = this.cabeca;
            } else {
                // Para os outros nós, adicionamos ao final da lista.
                novoNodo.proximo = new Nodo(elementos[i]);
                novoNodo = novoNodo.proximo;
            }
        }
    }
}

// Testando a lista simples com a função de embaralhar

// Criamos uma nova lista.
const lista = new ListaSimples();

// Adicionamos elementos à lista.
lista.adicionar(10);  // Lista: 10
lista.adicionar(20);  // Lista: 10, 20
lista.adicionar(30);  // Lista: 10, 20, 30
lista.adicionar(40);  // Lista: 10, 20, 30, 40
lista.adicionar(50);  // Lista: 10, 20, 30, 40, 50

// Listamos os elementos da lista antes do embaralhamento.
console.log("Antes do embaralhamento:");
lista.listar();  // Deve exibir: 10, 20, 30, 40, 50

// Embaralhando a lista.
lista.embaralhar();

// Listamos os elementos da lista depois do embaralhamento.
console.log("Depois do embaralhamento:");
lista.listar();  // Deve exibir os elementos em ordem aleatória, por exemplo: 30, 10, 50, 20, 40
