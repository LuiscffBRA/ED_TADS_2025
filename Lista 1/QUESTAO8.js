class PilhaDePratos {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.pilhas = [[]]; // Começa com uma pilha vazia
    }

    empilha(valor) {
        let ultimaPilha = this.pilhas[this.pilhas.length - 1];

        if (ultimaPilha.length < this.capacidade) {
            ultimaPilha.push(valor);
        } else {
            // Cria nova pilha e adiciona o valor
            this.pilhas.push([valor]);
        }
    }

    desempilha() {
        while (this.pilhas.length > 0) {
            let ultimaPilha = this.pilhas[this.pilhas.length - 1];

            if (ultimaPilha.length === 0) {
                this.pilhas.pop(); // Remove pilha vazia
            } else {
                return ultimaPilha.pop(); // Remove e retorna o último prato
            }
        }

        return null; // Todas pilhas estão vazias
    }
}

let pratos = new PilhaDePratos(3);

pratos.empilha(5);
pratos.empilha(10);
pratos.empilha(15);
pratos.empilha(20); // cria nova pilha

console.log(pratos.desempilha()); // ➜ 20
console.log(pratos.desempilha()); // ➜ 15
