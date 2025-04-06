class DuasPilhas{
    constructor(tamanho){
        this.vetor = new Array(tamanho);
        this.topoA = -1;
        this.topoB = tamanho;
        this.tamanho = tamanho;
    }
    eVaziaA(){
        return this.topoA  === -1;
    }
    eVaziaB(){
        return this.topoB === this.tamanho;
    }
    empilhaA(dado){
        if(this.topoA + 1 === this.topoB){
            console.log("A pilha está cheia!")
            return;
        }
        this.topoA++;
        this.vetor[this.topoA] = dado;
    }
    empilhaB(dado){
        if(this.topoB - 1 === this.topoA){
            console.log("A pilha está cheia!")
            return;
        }
        this.topoB--;
        this.vetor[this.topoB] = dado;
    }
    desempilhaA(){
        if(this.topoA === -1){
            console.log("A pilha está Vazia!")
            return;
        }
        let valor = this.vetor[this.topoA]
        this.topoA --;
        return valor;
    }
    desempilhaB(){
        if(this.topoB === this.tamanho){
            console.log("A pilha está Vazia!")
            return;
        }
        let valor = this.vetor[this.topoB]
        this.topoB ++;
        return valor;
    }
}

const pilhas = new DuasPilhas(6);
pilhas.empilhaA(1);
pilhas.empilhaA(2);
pilhas.empilhaB(9);
pilhas.empilhaB(8);

console.log("Desempilha A:", pilhas.desempilhaA()); // 2
console.log("Desempilha B:", pilhas.desempilhaB()); // 8
