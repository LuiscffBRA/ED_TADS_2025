// Classe Nodo: Representa cada elemento na lista.
class Nodo {
    constructor(valor) {
        // O valor que será armazenado no nó (pode ser qualquer tipo de dado).
        this.valor = valor;

        // O ponteiro para o próximo nó. Inicialmente, é null.
        this.proximo = null;
    }
}

// Classe ListaSimples: Representa a lista encadeada usando um array de nós.
class ListaSimples {
    constructor() {
        // Inicialmente, a lista está vazia, então a cabeça é null.
        this.cabeca = null;
    }

    // Método para adicionar um novo elemento no final da lista.
    adicionar(valor) {
        // Criamos um novo nó com o valor fornecido.
        const novoNodo = new Nodo(valor);

        // Se a lista estiver vazia, o novo nó será a cabeça da lista.
        if (this.cabeca === null) {
            this.cabeca = novoNodo;
        } else {
            // Se a lista não estiver vazia, percorremos até o último nó.
            let atual = this.cabeca;

            // Enquanto o próximo nó não for null (significa que há mais elementos),
            // vamos continuar percorrendo a lista.
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }

            // Quando encontramos o último nó, definimos o próximo nó como o novo nó.
            atual.proximo = novoNodo;
        }
    }

    // Método para remover o primeiro elemento da lista.
    remover() {
        // Se a lista estiver vazia, não podemos remover nada.
        if (this.cabeca === null) {
            console.log("A lista está vazia.");
            return null;
        }

        // Se a lista não estiver vazia, o valor a ser removido será o valor da cabeça da lista.
        const valorRemovido = this.cabeca.valor;

        // Agora, atualizamos a cabeça da lista para o próximo nó.
        // Se o próximo nó for null, significa que a lista ficará vazia.
        this.cabeca = this.cabeca.proximo;

        // Retornamos o valor removido.
        return valorRemovido;
    }

    // Método para listar todos os elementos da lista.
    listar() {
        // Criamos um array vazio para armazenar os valores dos nós.
        let elementos = [];

        // A variável 'atual' vai percorrer todos os nós da lista.
        let atual = this.cabeca;

        // Enquanto houver nós na lista, vamos adicionando os valores ao array.
        while (atual !== null) {
            elementos.push(atual.valor);
            atual = atual.proximo;  // Passamos para o próximo nó.
        }

        // Aqui, mostramos os valores armazenados na lista.
        console.log("Elementos da lista:", elementos.join(", "));
    }

    // Método para verificar se a lista está vazia.
    isEmpty() {
        // Se a cabeça da lista for null, significa que a lista está vazia.
        return this.cabeca === null;
    }

    // Método para verificar o primeiro elemento da lista sem removê-lo.
    primeiro() {
        // Se a lista estiver vazia, retornamos null.
        if (this.isEmpty()) {
            console.log("A lista está vazia.");
            return null;
        }
        
        // Caso contrário, retornamos o valor da cabeça da lista.
        return this.cabeca.valor;
    }
}

// Testando a lista simples

// Criamos uma nova lista.
const lista = new ListaSimples();

// Adicionando elementos à lista (add)
lista.adicionar(10);  // Lista: 10
lista.adicionar(20);  // Lista: 10, 20
lista.adicionar(30);  // Lista: 10, 20, 30

// Listando os elementos da lista (mostrar conteúdo)
lista.listar();  // Deve exibir: 10, 20, 30

// Verificando qual é o primeiro valor da lista (sem remover)
console.log("Primeiro da lista:", lista.primeiro());  // Deve exibir: 10

// Removendo o primeiro elemento da lista (remove)
console.log("Removido:", lista.remover());  // Deve exibir: 10
lista.listar();  // Deve exibir: 20, 30

// Verificando o primeiro valor após a remoção
console.log("Primeiro da lista:", lista.primeiro());  // Deve exibir: 20

// Removendo os dois últimos elementos da lista
console.log("Removido:", lista.remover());  // Deve exibir: 20
console.log("Removido:", lista.remover());  // Deve exibir: 30

// Tentando remover de uma lista vazia
console.log("Removido:", lista.remover());  // Deve exibir: A lista está vazia.
