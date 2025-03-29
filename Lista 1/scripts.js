// QUESTÃO 1: Inverter uma palavra usando uma pilha
function inverte(palavra) {
    let pilha = [];
    for (let char of palavra) {
        pilha.push(char); // Empilha cada caractere
    }
    let palavraInvertida = "";
    while (pilha.length > 0) {
        palavraInvertida += pilha.pop(); // Remove do topo para formar a palavra invertida
    }
    return palavraInvertida;
}

// QUESTÃO 2: Implementação de duas pilhas compartilhando o mesmo vetor
class DuasPilhas {
    constructor(tamanho) {
        this.vetor = new Array(tamanho);
        this.topoA = -1; // Pilha A começa do início
        this.topoB = tamanho; // Pilha B começa do fim
    }

    // Inicializa as pilhas
    inicializar() {
        this.topoA = -1;
        this.topoB = this.vetor.length;
    }

    // Verifica se a Pilha A está vazia
    eVaziaA() {
        return this.topoA === -1;
    }

    // Verifica se a Pilha B está vazia
    eVaziaB() {
        return this.topoB === this.vetor.length;
    }

    // Empilha na Pilha A
    empilhaA(valor) {
        if (this.topoA + 1 === this.topoB) {
            console.log("Pilha cheia!");
            return;
        }
        this.vetor[++this.topoA] = valor;
    }

    // Empilha na Pilha B
    empilhaB(valor) {
        if (this.topoB - 1 === this.topoA) {
            console.log("Pilha cheia!");
            return;
        }
        this.vetor[--this.topoB] = valor;
    }

    // Desempilha da Pilha A
    desempilhaA() {
        if (this.eVaziaA()) {
            console.log("Pilha A vazia!");
            return null;
        }
        return this.vetor[this.topoA--];
    }

    // Desempilha da Pilha B
    desempilhaB() {
        if (this.eVaziaB()) {
            console.log("Pilha B vazia!");
            return null;
        }
        return this.vetor[this.topoB++];
    }
}

// QUESTÃO 3: Troca o topo com a base
function trocaTopoBase(pilha) {
    if (pilha.length < 2) return pilha;
    let auxiliar = [];
    while (pilha.length > 1) {
        auxiliar.push(pilha.pop());
    }
    let topo = pilha.pop();
    while (auxiliar.length > 1) {
        pilha.push(auxiliar.shift());
    }
    let base = auxiliar.shift();
    pilha.push(topo);
    pilha.push(base);
    return pilha;
}

// QUESTÃO 4: Conversor de decimal para binário
function decimalParaBinario(numero) {
    let pilha = [];
    while (numero > 0) {
        pilha.push(numero % 2); // Empilha o resto
        numero = Math.floor(numero / 2); // Divide por 2
    }
    let binario = "";
    while (pilha.length > 0) {
        binario += pilha.pop(); // Forma o número binário
    }
    return binario || "0";
}

// QUESTÃO 5: Verificar se parênteses e colchetes estão bem formados
function bemFormado(texto) {
    let pilha = [];
    for (let char of texto) {
        if (char === "(" || char === "[") {
            pilha.push(char);
        } else if (char === ")" || char === "]") {
            let topo = pilha.pop();
            if (
                (char === ")" && topo !== "(") ||
                (char === "]" && topo !== "[")
            ) {
                return false;
            }
        }
    }
    return pilha.length === 0;
}

// QUESTÃO 6: Transformar expressão algébrica em notação polonesa reversa (RPN)
function paraRPN(expressao) {
    let pilha = [];
    let resultado = "";
    let precedencia = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
    for (let char of expressao) {
        if (/[a-z]/.test(char)) {
            resultado += char; // Letras vão direto para o resultado
        } else if (char === "(") {
            pilha.push(char);
        } else if (char === ")") {
            while (pilha.length > 0 && pilha[pilha.length - 1] !== "(") {
                resultado += pilha.pop();
            }
            pilha.pop(); // Remove o "("
        } else {
            while (
                pilha.length > 0 &&
                precedencia[char] <= precedencia[pilha[pilha.length - 1]]
            ) {
                resultado += pilha.pop();
            }
            pilha.push(char);
        }
    }
    while (pilha.length > 0) {
        resultado += pilha.pop();
    }
    return resultado;
}

// QUESTÃO 7: Remover duplicados da pilha
function removeDuplicados(pilha) {
    let visto = new Set();
    let novaPilha = [];
    while (pilha.length > 0) {
        let elemento = pilha.pop();
        if (!visto.has(elemento)) {
            visto.add(elemento);
            novaPilha.unshift(elemento); // Adiciona ao início
        }
    }
    return novaPilha.reverse(); // Reverte para manter a ordem original
}

// QUESTÃO 8: Pilha de pratos com capacidade fixa
class PilhaDePratos {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.pilhas = [[]];
    }

    empilha(valor) {
        let ultimaPilha = this.pilhas[this.pilhas.length - 1];
        if (ultimaPilha.length === this.capacidade) {
            this.pilhas.push([]); // Cria nova pilha
            ultimaPilha = this.pilhas[this.pilhas.length - 1];
        }
        ultimaPilha.push(valor);
    }

    desempilha() {
        if (this.pilhas.length === 0 || this.pilhas[0].length === 0) {
            console.log("Todas as pilhas estão vazias!");
            return null;
        }
        let ultimaPilha = this.pilhas[this.pilhas.length - 1];
        let valor = ultimaPilha.pop();
        if (ultimaPilha.length === 0 && this.pilhas.length > 1) {
            this.pilhas.pop(); // Remove a pilha vazia
        }
        return valor;
    }
}

// TESTES
console.log("Questão 1:", inverte("ABACAXI"));
let pilha2 = new DuasPilhas(10);
pilha2.empilhaA(1);
pilha2.empilhaB(10);
console.log("Questão 2:", pilha2.desempilhaA(), pilha2.desempilhaB());
console.log("Questão 3:", trocaTopoBase([1, 2, 3]));
console.log("Questão 4:", decimalParaBinario(10));
console.log("Questão 5:", bemFormado("[()]"));
console.log("Questão 6:", paraRPN("(a+(b*c))"));
console.log("Questão 7:", removeDuplicados([3, 7, 3, 2, 7, 1, 4, 2]));
let pratos = new PilhaDePratos(3);
pratos.empilha(5);
pratos.empilha(10);
pratos.empilha(15);
pratos.empilha(20);
console.log("Questão 8:", pratos.desempilha(), pratos.desempilha());
