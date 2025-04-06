class Pilha {
    constructor() {
        this.itens = [];
    }

    push(item) {
        this.itens.push(item);
    }

    pop() {
        return this.itens.pop();
    }

    peek() {
        return this.itens[this.itens.length - 1];
    }

    isEmpty() {
        return this.itens.length === 0;
    }

    size() {
        return this.itens.length;
    }
}
function estaBemFormado(expressao) {
    const pilha = new Pilha();

    for (let i = 0; i < expressao.length; i++) {
        let char = expressao[i];

        if (char === '(' || char === '[') {
            pilha.push(char);
        } else if (char === ')' || char === ']') {
            if (pilha.isEmpty()) {
                return false;
            }

            let topo = pilha.pop();

            if ((char === ')' && topo !== '(') ||
                (char === ']' && topo !== '[')) {
                return false;
            }
        }
    }

    return pilha.isEmpty();
}

console.log(estaBemFormado("[ ( ) [ ( ) ] ] ( )")); // true
console.log(estaBemFormado("( ( ) ]"));             // false
console.log(estaBemFormado("(([]))"));              // true
console.log(estaBemFormado("([)]"));                // false
