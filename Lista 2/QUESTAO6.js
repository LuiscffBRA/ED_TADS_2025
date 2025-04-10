class Fila {
    constructor() {
        this.itens = [];  // A fila será armazenada em um array
    }

    // Método para adicionar um elemento à fila
    enqueue(elemento) {
        this.itens.push(elemento);  // Adiciona o elemento no final da fila
    }

    // Método para remover o primeiro elemento da fila
    dequeue() {
        if (this.isVazia()) {
            console.log("A fila está vazia, não há elementos para remover.");
            return null;
        }
        return this.itens.shift();
    }

    // Método para verificar se a fila está vazia
    isVazia() {
        return this.itens.length === 0;
    }

    // Método para retornar o primeiro elemento da fila (sem removê-lo)
    frente() {
        return this.isVazia() ? null : this.itens[0];
    }

    // Método para listar todos os elementos da fila
    listar() {
        console.log("Elementos da fila:", this.itens.join(", "));
    }
}

// Função recursiva para reverter uma fila
function reverterFila(fila) {
    if (fila.isVazia()) {
        return;  // Caso base: se a fila estiver vazia, não há o que reverter
    }

    // Passo 1: Remover o primeiro elemento da fila
    const elemento = fila.dequeue();

    // Passo 2: Chamar recursivamente a função para reverter o restante da fila
    reverterFila(fila);

    // Passo 3: Após a recursão, adicionar o elemento removido de volta à fila
    fila.enqueue(elemento);
}

// Testando a reversão da fila
const fila = new Fila();

// Adicionando elementos à fila
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);

// Exibindo a fila antes da reversão
console.log("Fila antes da reversão:");
fila.listar();

// Revertendo a fila
reverterFila(fila);

// Exibindo a fila após a reversão
console.log("Fila após a reversão:");
fila.listar();
