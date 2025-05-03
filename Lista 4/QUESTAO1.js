class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Métodos auxiliares para navegar na estrutura de heap
    getLeftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
    getRightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
    getParentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }

    hasLeftChild(index) { return this.getLeftChildIndex(index) < this.heap.length; }
    hasRightChild(index) { return this.getRightChildIndex(index) < this.heap.length; }
    hasParent(index) { return this.getParentIndex(index) >= 0; }

    leftChild(index) { return this.heap[this.getLeftChildIndex(index)]; }
    rightChild(index) { return this.heap[this.getRightChildIndex(index)]; }
    parent(index) { return this.heap[this.getParentIndex(index)]; }

    // Troca dois elementos no heap
    swap(indexOne, indexTwo) {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    // Retorna o elemento mínimo (raiz) sem remover
    peek() {
        if (this.heap.length === 0) return null;
        return this.heap[0];
    }

    // Remove e retorna o elemento mínimo (raiz)
    poll() {
        if (this.heap.length === 0) return null;
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1]; // Move o último elemento para a raiz
        this.heap.pop(); // Remove o último elemento
        this.heapifyDown(); // Reorganiza o heap de cima para baixo
        return item;
    }

    // Adiciona um novo elemento ao heap
    add(item) {
        this.heap.push(item);
        this.heapifyUp(); // Reorganiza o heap de baixo para cima
    }

    // Reorganiza o heap de baixo para cima
    heapifyUp() {
        let index = this.heap.length - 1; // Começa pelo último elemento adicionado
        while (this.hasParent(index) && this.parent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    // Reorganiza o heap de cima para baixo
    heapifyDown() {
        let index = 0; // Começa pela raiz
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.rightChild(index) < this.leftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break; // Se o pai é menor que os filhos, o heap está correto
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }

    // Retorna o tamanho do heap
    size() {
        return this.heap.length;
    }

    // Verifica se o heap está vazio
    isEmpty() {
        return this.heap.length === 0;
    }

    // Imprime o heap (para fins de depuração)
    print() {
        console.log(this.heap);
    }
}

// Exemplo de uso:
const heap = new MinHeap();
heap.add(10);
heap.add(4);
heap.add(15);
heap.add(8);
heap.add(2);
heap.add(20);

console.log("Heap após inserções:");
heap.print(); // [2, 4, 15, 10, 8, 20]

console.log("Elemento mínimo removido:", heap.poll()); // 2
console.log("Heap após remoção:");
heap.print(); // [4, 8, 15, 10, 20]