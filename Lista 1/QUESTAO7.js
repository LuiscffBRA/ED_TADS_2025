class Pilha {
    constructor(){
        this.itens = []; // vetor criado
    }

    push(numeros){
        this.itens.push(numeros); // metodo para adicionar
    }

    pop(){
        return this.itens.pop(); // metodo para remover
    }

    top(){
        return this.itens.length > 0 ? this.itens[this.itens.length - 1] : null; // pega o topo da pilha sem remover.
    }

    isEmpty(){
        return this.itens.length === 0; // metodo verifica se está vazio.
    }

    has(elemento){
        return this.itens.includes(elemento); // metodo para verificar se já existe o elemento
    }
    add(elemento){
        if(this.has(elemento)){
            this.itens.push(elemento);
        }
    }

}

function removerDuplicadas(pilhaOriginal) {
    let vistos = new Set();        // Para armazenar os elementos já vistos
    let resultado = [];            // Pilha final sem duplicatas

    // Percorre do topo (fim da lista) até a base (início)
    for (let i = pilhaOriginal.length - 1; i >= 0; i--) {
        const elemento = pilhaOriginal[i];
        if (!vistos.has(elemento)) {
            vistos.add(elemento);
            resultado.push(elemento); // Adiciona no fim, mas inverte depois
        }
    }

    // Reverter o array para restaurar a ordem correta
    return resultado.reverse();
}

// Testes
let pilha1 = [3, 7, 3, 2, 7, 1, 4, 2];
console.log("Pilha original:", pilha1);
console.log("Pilha sem duplicatas:", removerDuplicadas(pilha1)); // Esperado: [3, 7, 2, 1, 4]

let pilha2 = [2, 2, 2, 2, 2, 2, 2];
console.log("Pilha original:", pilha2);
console.log("Pilha sem duplicatas:", removerDuplicadas(pilha2)); // Esperado: [2]

let pilha3 = [1, 2, 3, 4, 5];
console.log("Pilha original:", pilha3);
console.log("Pilha sem duplicatas:", removerDuplicadas(pilha3)); // Esperado: [1, 2, 3, 4, 5]

let pilha4 = [];
console.log("Pilha original:", pilha4);
console.log("Pilha sem duplicatas:", removerDuplicadas(pilha4)); // Esperado: []
