class Pilha{
    constructor(){
        this.itens = [];
    }

    push(elemento){
        this.itens.push(elemento);
    }
    pop(){
        return this.itens.pop();
    }

    isEmpty(){
        return this.itens.length === 0;
    }

    peek(){
        return this.itens[this.itens.length - 1];
    }
}

class FilaComPilhas{
    constructor(){
        this.entrada = new Pilha;
        this.saida = new Pilha;
    }
    enqueue(elemento){
        this.entrada.push(elemento);
    }
    dequeue(){
        if(this.saida.isEmpty()){
            while(!this.entrada.isEmpty()){
            this.saida.push(this.entrada.pop())
            }
        }
        return this.saida.pop();
    }
        
}

let fila = new FilaComPilhas();
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);

console.log(fila.dequeue()); // 1
console.log(fila.dequeue()); // 2

fila.enqueue(4);
console.log(fila.dequeue()); // 3
console.log(fila.dequeue()); // 4