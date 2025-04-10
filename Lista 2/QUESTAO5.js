class DequeCustomizado {
    constructor(capacidade) {
        this.itens = [];  // A estrutura interna do deque será um array
        this.capacidade = capacidade;  // Limite máximo de elementos no deque
    }

    // Método para adicionar um item no final (semelhante a um enqueue normal)
    adicionarFinal(elemento) {
        if (this.itens.length >= this.capacidade) {
            console.log("Erro: Deque cheio (Overflow).");
            return;
        }
        this.itens.push(elemento);
    }

    // Método para adicionar um item no início (semelhante a um enqueue na frente)
    adicionarInicio(elemento) {
        if (this.itens.length >= this.capacidade) {
            console.log("Erro: Deque cheio (Overflow).");
            return;
        }
        this.itens.unshift(elemento);
    }

    // Método para remover o primeiro item (semelhante ao dequeue)
    removerInicio() {
        if (this.estaVazio()) {
            console.log("Erro: Deque vazio (Underflow).");
            return null;
        }
        return this.itens.shift();
    }

    // Método para remover o último item (remover do final)
    removerFinal() {
        if (this.estaVazio()) {
            console.log("Erro: Deque vazio (Underflow).");
            return null;
        }
        return this.itens.pop();
    }

    // Método para verificar se o deque está vazio
    estaVazio() {
        return this.itens.length === 0;
    }

    // Método para acessar o primeiro item sem removê-lo
    inicio() {
        return this.estaVazio() ? null : this.itens[0];
    }

    // Método para acessar o último item sem removê-lo
    fim() {
        return this.estaVazio() ? null : this.itens[this.itens.length - 1];
    }

    // Método para listar todos os elementos no deque
    mostrarItens() {
        console.log("Conteúdo do Deque:", this.itens.join(", "));
    }
}

// Teste da classe DequeCustomizado
const deque = new DequeCustomizado(5);

// Adicionando elementos no deque
deque.adicionarInicio(1);     // 1 na frente
deque.adicionarFinal(2);      // 2 no final
deque.adicionarFinal(3);      // 3 no final
deque.adicionarInicio(0);     // 0 na frente
deque.mostrarItens();         // Exibe: 0, 1, 2, 3

// Removendo elementos
console.log("Removendo do início:", deque.removerInicio());  // Deve remover 0
console.log("Removendo do final:", deque.removerFinal());   // Deve remover 3

// Listando o deque após as remoções
deque.mostrarItens();         // Exibe: 1, 2
