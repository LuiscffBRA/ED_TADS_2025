// Classe Nodo: Representa cada elemento da lista encadeada.
class Nodo {
    constructor(valor) {
        // O valor que será armazenado no nó (pode ser qualquer tipo de dado, aqui é apenas um número)
        this.valor = valor;

        // O ponteiro para o próximo nó. Inicialmente é null, pois não há outro nó depois dele.
        this.proximo = null;
    }
}

// Classe PilhaEncadeada: Representa uma pilha implementada com uma lista encadeada.
class PilhaEncadeada {
    constructor() {
        // Inicialmente, a pilha está vazia, então o topo da pilha é null.
        this.topo = null;
    }

    // Método para adicionar um elemento no topo da pilha.
    push(valor) {
        // Criamos um novo nó com o valor fornecido.
        const novoNodo = new Nodo(valor);
        
        // O novo nó que estamos adicionando aponta para o que era o topo da pilha antes.
        novoNodo.proximo = this.topo;

        // Agora o topo da pilha é o novo nó que acabamos de adicionar.
        this.topo = novoNodo;
    }

    // Método para remover o elemento do topo da pilha.
    pop() {
        // Verificamos se a pilha está vazia, caso em que não podemos remover nada.
        if (this.isEmpty()) {
            // Se a pilha estiver vazia, mostramos uma mensagem e retornamos null.
            console.log("A pilha está vazia.");
            return null;
        }
        
        // Caso a pilha não esteja vazia, pegamos o valor do topo.
        const valorRemovido = this.topo.valor;

        // Agora, o topo da pilha vai ser o próximo nó na lista (ou seja, o segundo nó, ou null se for o último).
        this.topo = this.topo.proximo;

        // Retornamos o valor que foi removido, pois queremos saber qual item saiu da pilha.
        return valorRemovido;
    }

    // Método para retornar o valor do topo da pilha sem removê-lo.
    peek() {
        // Se a pilha estiver vazia, não há valor no topo, então retornamos null.
        if (this.isEmpty()) {
            console.log("A pilha está vazia.");
            return null;
        }
        
        // Caso contrário, retornamos o valor que está no topo da pilha.
        return this.topo.valor;
    }

    // Método para verificar se a pilha está vazia.
    isEmpty() {
        // Se o topo da pilha for null, significa que a pilha está vazia, então retornamos true.
        return this.topo === null;
    }

    // Método para listar todos os elementos da pilha, como uma visualização dos itens.
    listar() {
        // Vamos criar um array vazio para armazenar os valores da pilha.
        let elementos = [];

        // A variável atual será usada para percorrer todos os nós da pilha.
        let atual = this.topo;

        // Enquanto houver nós na pilha (enquanto 'atual' não for null), vamos adicionando os valores ao array.
        while (atual !== null) {
            elementos.push(atual.valor);  // Adiciona o valor do nó no array 'elementos'
            atual = atual.proximo;        // Move para o próximo nó na pilha
        }
        
        // Aqui, mostramos os valores armazenados na pilha, em ordem do topo para o fundo.
        console.log("Elementos da pilha:", elementos.join(", "));
    }
}

// Testando a pilha:

// Criamos uma nova pilha.
const pilha = new PilhaEncadeada();

// Adicionando elementos à pilha (push)
pilha.push(10);  // Pilha: 10
pilha.push(20);  // Pilha: 20, 10
pilha.push(30);  // Pilha: 30, 20, 10

// Listando os elementos da pilha (mostrando o conteúdo da pilha)
pilha.listar();  // Deve exibir: 30, 20, 10

// Verificando qual é o valor no topo da pilha (sem remover)
console.log("Topo da pilha:", pilha.peek());  // Deve exibir: 30

// Removendo elementos da pilha (pop) e exibindo o valor removido
console.log("Removido:", pilha.pop());  // Deve exibir: 30
pilha.listar();  // Deve exibir: 20, 10

// Verificando novamente o valor do topo após a remoção
console.log("Topo da pilha:", pilha.peek());  // Deve exibir: 20

// Removendo os últimos dois elementos da pilha
console.log("Removido:", pilha.pop());  // Deve exibir: 20
console.log("Removido:", pilha.pop());  // Deve exibir: 10

// Tentando remover de uma pilha vazia
console.log("Removido:", pilha.pop());  // Deve exibir: A pilha está vazia.
