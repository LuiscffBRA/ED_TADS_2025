// Classe Nodo: Representa cada caractere na lista encadeada.
class Nodo {
    constructor(caractere) {
        // O caractere que será armazenado no nó.
        this.caractere = caractere;

        // O ponteiro para o próximo nó. Inicialmente é null.
        this.proximo = null;
    }
}

// Classe ListaCaracteres: Representa a lista encadeada de caracteres.
class ListaCaracteres {
    constructor() {
        // Inicialmente, a lista está vazia, então a cabeça é null.
        this.cabeca = null;
    }

    // Método para adicionar um caractere à lista.
    adicionar(caractere) {
        const novoNodo = new Nodo(caractere);

        if (this.cabeca === null) {
            // Se a lista estiver vazia, o novo caractere será o primeiro nó.
            this.cabeca = novoNodo;
        } else {
            // Caso contrário, percorre até o final da lista e adiciona o novo caractere.
            let atual = this.cabeca;
            while (atual.proximo !== null) {
                atual = atual.proximo;
            }
            atual.proximo = novoNodo;
        }
    }

    // Método para listar todos os caracteres da lista.
    listar() {
        let caracteres = [];
        let atual = this.cabeca;

        while (atual !== null) {
            caracteres.push(atual.caractere);
            atual = atual.proximo;
        }

        console.log("Lista de caracteres:", caracteres.join(""));
    }

    // Método para obter uma substring (nova lista) entre as posições A e B.
    substring(A, B) {
        let novaLista = new ListaCaracteres(); // Lista que armazenará a substring.

        let atual = this.cabeca;
        let posicao = 0;

        // Percorre a lista e adiciona os caracteres entre A e B na nova lista.
        while (atual !== null) {
            if (posicao >= A && posicao <= B) {
                novaLista.adicionar(atual.caractere); // Adiciona o caractere na nova lista.
            }
            atual = atual.proximo;
            posicao++;
        }

        return novaLista; // Retorna a nova lista com os caracteres de A até B.
    }
}

// Testando a lista de caracteres e a função substring

// Criamos uma nova lista.
const lista = new ListaCaracteres();

// Adicionamos os caracteres de uma string à lista.
let string = "Hello, World!";
for (let i = 0; i < string.length; i++) {
    lista.adicionar(string[i]);
}

// Listamos os caracteres da lista.
console.log("Lista original:");
lista.listar(); // Deve exibir: Hello, World!

// Obtemos a substring da posição 7 até a 11 (de "World").
const novaLista = lista.substring(7, 11);

// Listamos a substring.
console.log("Substring de 7 a 11:");
novaLista.listar(); // Deve exibir: World
