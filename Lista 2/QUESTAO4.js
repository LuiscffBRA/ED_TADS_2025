// Classe que representa a estrutura de dados Fila (FIFO - First In, First Out)
class Fila {
    // Construtor que inicializa a fila vazia
    constructor() {
        this.itens = [];  // A fila será armazenada em um array
    }

    // Método para adicionar um elemento à fila
    enqueue(elemento) {
        this.itens.push(elemento);  // Adiciona o elemento no final da fila
    }

    // Método para remover o primeiro elemento da fila
    dequeue() {
        // Se a fila estiver vazia, retorna null
        if (this.isVazia()) {
            console.log("A fila está vazia, não há elementos para remover.");
            return null;
        }
        // Remove o primeiro elemento da fila e o retorna
        return this.itens.shift();
    }

    // Método para verificar se a fila está vazia
    isVazia() {
        return this.itens.length === 0;  // Se o comprimento for zero, a fila está vazia
    }

    // Método para retornar o primeiro elemento da fila (sem removê-lo)
    frente() {
        // Se a fila não estiver vazia, retorna o primeiro elemento
        return this.isVazia() ? null : this.itens[0];
    }

    // Método para listar todos os elementos da fila
    listar() {
        console.log("Elementos da fila:", this.itens.join(", "));  // Exibe os elementos da fila no formato de string
    }
}

// Teste da classe Fila
const fila = new Fila();

// Adicionando elementos à fila
fila.enqueue("Caminhão 1");
fila.enqueue("Caminhão 2");
fila.enqueue("Caminhão 3");

// Listando os elementos da fila
console.log("Fila após inserção:");
fila.listar();  // Deve exibir: Caminhão 1, Caminhão 2, Caminhão 3

// Removendo um elemento da fila
console.log("Elemento removido:", fila.dequeue());  // Deve remover "Caminhão 1"

// Listando a fila após remoção
console.log("Fila após remoção:");
fila.listar();  // Deve exibir: Caminhão 2, Caminhão 3

// Exibindo o primeiro elemento sem removê-lo
console.log("Primeiro elemento da fila:", fila.frente());  // Deve exibir: Caminhão 2

// Verificando se a fila está vazia
console.log("A fila está vazia?", fila.isVazia());  // Deve exibir: false
