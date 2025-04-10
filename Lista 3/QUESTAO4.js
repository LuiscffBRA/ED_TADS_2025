// Classe Nodo: Representa cada elemento na lista.
class Nodo {
    constructor(valor) {
        // O valor que será armazenado no nó (pode ser qualquer tipo de dado).
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

    // Método para inverter a ordem dos elementos da lista.
    inverter() {
        let anterior = null;  // Inicialmente, não há nó anterior, então é null.
        let atual = this.cabeca;  // Começamos com a cabeça da lista.
        let proximo = null;  // O próximo nó também começa como null.

        // Percorrendo a lista até o final.
        while (atual !== null) {
            proximo = atual.proximo;  // Guardamos o próximo nó, pois vamos mudar o ponteiro.

            // Invertendo a direção do ponteiro.
            atual.proximo = anterior;

            // Movemos um passo à frente na lista: o 'anterior' se torna o 'atual' e o 'atual' vai para o 'proximo'.
            anterior = atual;
            atual = proximo;
        }

        // Após o final do loop, o 'anterior' será o novo primeiro nó.
        this.cabeca = anterior;
    }
}

// Testando a lista simples com a função de inverter

// Criamos uma nova lista.
const lista = new ListaSimples();

// Adicionamos elementos à lista.
lista.adicionar(10);  // Lista: 10
lista.adicionar(20);  // Lista: 10, 20
lista.adicionar(30);  // Lista: 10, 20, 30

// Listamos os elementos da lista antes da inversão.
console.log("Antes da inversão:");
lista.listar();  // Deve exibir: 10, 20, 30

// Invertendo a lista.
lista.inverter();

// Listamos os elementos da lista após a inversão.
console.log("Depois da inversão:");
lista.listar();  // Deve exibir: 30, 20, 10
