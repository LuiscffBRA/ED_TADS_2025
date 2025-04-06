class Pilha {
    constructor(parametro) {
        this.vetor = Array(parametro);
        this.topo = -1;
    }

    empilha(dado) {
        if (this.topo + 1 === this.vetor.length) {
            console.log("A pilha está cheia!");
            return;
        }
        this.topo++;
        this.vetor[this.topo] = dado;
    }

    desempilha() {
        if (this.topo === -1) {
            console.log("A pilha está vazia!");
            return;
        }
        let valor = this.vetor[this.topo];
        this.topo--;
        return valor;
    }

    trocaTopoBase() {
        if (this.topo <= 0) return; // Se só tem 1 ou nenhum elemento, não troca nada

        let temp = this.vetor[0]; // Salva a base
        this.vetor[0] = this.vetor[this.topo]; // Base recebe o topo
        this.vetor[this.topo] = temp; // Topo recebe o antigo valor da base
    }
}

let pilha = new Pilha(10);
pilha.empilha(1);
pilha.empilha(2);
pilha.empilha(3);
pilha.empilha(4);
pilha.empilha(5);

console.log("Antes da troca:", pilha.vetor.slice(0, pilha.topo + 1));

pilha.trocaTopoBase();

console.log("Depois da troca:", pilha.vetor.slice(0, pilha.topo + 1));
