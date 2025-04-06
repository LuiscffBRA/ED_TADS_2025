class Fila{
    constructor(){
        this.fila = [];

    }

    enqueue(elemento){
        this.fila.push(elemento);
    }
    dequeue(){
        return this.fila.shift();
    }

    isEmpty(){
        return this.fila.length === 0;
    }
    front(){
        return this.isEmpty() ? null : this.fila[0];
    }

}

class PilhaComFilas{
    constructor(){
        this.fila1 = new Fila; //principal
        this.fila2 = new Fila; //aux
    }
    push(elemento){
        this.fila2.enqueue(elemento);

        while(!this.fila1.isEmpty()){
            this.fila2.enqueue(this.fila1.dequeue());
        }

        let temp = this.fila1;
        this.fila1 = this.fila2;
        this.fila2 = temp;
    }

    pop(){
        return this.fila1.dequeue();
    }

    isEmpty(){
        return this.fila1.isEmpty();
    }
}

const pilha = new PilhaComFilas();

pilha.push(1);
pilha.push(2);
pilha.push(3);

console.log(pilha.pop()); // 3
console.log(pilha.pop()); // 2
console.log(pilha.pop()); // 1
console.log(pilha.pop()); // undefined
