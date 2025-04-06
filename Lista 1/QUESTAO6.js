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
}
function infixaParaRPN(expressao) {
    const pilha = new Pilha();
    let saida = '';

    const precedencia = {
        '+': 1,
        '-': 1,
        '*': 2,
        '/': 2,
        '^': 3
    };

    for (let i = 0; i < expressao.length; i++) {
        const token = expressao[i];

        if (/[a-z]/i.test(token)) {
            // Se for operando (letra), vai direto pra saída
            saida += token;
        } else if (token === '(') {
            pilha.push(token);
        } else if (token === ')') {
            while (!pilha.isEmpty() && pilha.peek() !== '(') {
                saida += pilha.pop();
            }
            pilha.pop(); // remove o parêntese '('
        } else if ('+-*/^'.includes(token)) {
            while (!pilha.isEmpty() &&
                   precedencia[token] <= precedencia[pilha.peek()] &&
                   pilha.peek() !== '(') {
                saida += pilha.pop();
            }
            pilha.push(token);
        }
    }

    // Depois que acabar, tira o que restou da pilha
    while (!pilha.isEmpty()) {
        saida += pilha.pop();
    }

    return saida;
}
console.log(infixaParaRPN("(a+(b*c))"));                      // abc*+
console.log(infixaParaRPN("((a+b)*(z+x))"));                 // ab+zx+*
console.log(infixaParaRPN("((a+t)*((b+(a+c))^(c+d)))"));     // at+bac++cd+^*
console.log(infixaParaRPN("a+b*c-d"));                       // abc*+d-
console.log(infixaParaRPN("(a+b)+c/d"));                     // ab+cd/+
console.log(infixaParaRPN("a*b-(c-d)+e"));                   // ab*cd-e+
