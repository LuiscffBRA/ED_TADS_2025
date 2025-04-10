// Classe Nodo: Representa cada elemento da lista encadeada.
class Nodo {
    constructor(valor) {
        // O valor que será armazenado no nó (pode ser qualquer tipo de dado, aqui é apenas um número)
        this.valor = valor;

        // O ponteiro para o próximo nó. Inicialmente é null, pois não há outro nó depois dele.
        this.proximo = null;
    }
}

// Classe FilaEncadeada: Representa uma fila implementada com uma lista encadeada.
class FilaEncadeada {
    constructor() {
        // Inicialmente, a fila está vazia, então o início e o fim da fila são null.
        this.inicio = null;  // Representa o início da fila (onde os elementos são removidos)
        this.fim = null;     // Representa o fim da fila (onde os elementos são adicionados)
    }

    // Método para adicionar um elemento no final da fila.
    enqueue(valor) {
        // Criamos um novo nó com o valor fornecido.
        const novoNodo = new Nodo(valor);

        // Se a fila estiver vazia, o início e o fim serão o novo nó.
        if (this.isEmpty()) {
            this.inicio = novoNodo;
            this.fim = novoNodo;
        } else {
            // Caso contrário, adicionamos o novo nó ao final da fila.
            this.fim.proximo = novoNodo;

            // Atualizamos o fim da fila para o novo nó.
            this.fim = novoNodo;
        }
    }

    // Método para remover o primeiro elemento da fila.
    dequeue() {
        // Verificamos se a fila está vazia, caso em que não podemos remover nada.
        if (this.isEmpty()) {
            // Se a fila estiver vazia, mostramos uma mensagem e retornamos null.
            console.log("A fila está vazia.");
            return null;
        }

        // Caso a fila não esteja vazia, pegamos o valor do início da fila.
        const valorRemovido = this.inicio.valor;

        // Agora, o início da fila vai ser o próximo nó (caso contrário, será null).
        this.inicio = this.inicio.proximo;

        // Se a fila ficou vazia após a remoção, o fim da fila também precisa ser null.
        if (this.inicio === null) {
            this.fim = null;
        }

        // Retornamos o valor que foi removido da fila.
        return valorRemovido;
    }

    // Método para retornar o valor do primeiro elemento da fila sem removê-lo.
    frente() {
        // Se a fila estiver vazia, não há elemento na frente, então retornamos null.
        if (this.isEmpty()) {
            console.log("A fila está vazia.");
            return null;
        }
        
        // Caso contrário, retornamos o valor que está no início da fila.
        return this.inicio.valor;
    }

    // Método para verificar se a fila está vazia.
    isEmpty() {
        // Se o início da fila for null, significa que a fila está vazia.
        return this.inicio === null;
    }

    // Método para listar todos os elementos da fila, como uma visualização dos itens.
    listar() {
        // Vamos criar um array vazio para armazenar os valores da fila.
        let elementos = [];

        // A variável atual será usada para percorrer todos os nós da fila.
        let atual = this.inicio;

        // Enquanto houver nós na fila (enquanto 'atual' não for null), vamos adicionando os valores ao array.
        while (atual !== null) {
            elementos.push(atual.valor);  // Adiciona o valor do nó no array 'elementos'
            atual = atual.proximo;        // Move para o próximo nó na fila
        }
        
        // Aqui, mostramos os valores armazenados na fila, da frente para trás.
        console.log("Elementos da fila:", elementos.join(", "));
    }
}

// Testando a fila:

// Criamos uma nova fila.
const fila = new FilaEncadeada();

// Adicionando elementos à fila (enqueue)
fila.enqueue(10);  // Fila: 10
fila.enqueue(20);  // Fila: 10, 20
fila.enqueue(30);  // Fila: 10, 20, 30

// Listando os elementos da fila (mostrando o conteúdo da fila)
fila.listar();  // Deve exibir: 10, 20, 30

// Verificando qual é o valor na frente da fila (sem remover)
console.log("Frente da fila:", fila.frente());  // Deve exibir: 10

// Removendo elementos da fila (dequeue) e exibindo o valor removido
console.log("Removido:", fila.dequeue());  // Deve exibir: 10
fila.listar();  // Deve exibir: 20, 30

// Verificando novamente o valor da frente após a remoção
console.log("Frente da fila:", fila.frente());  // Deve exibir: 20

// Removendo os dois últimos elementos da fila
console.log("Removido:", fila.dequeue());  // Deve exibir: 20
console.log("Removido:", fila.dequeue());  // Deve exibir: 30

// Tentando remover de uma fila vazia
console.log("Removido:", fila.dequeue());  // Deve exibir: A fila está vazia.
