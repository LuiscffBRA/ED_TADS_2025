class Pilha{
    constructor(){
        this.palavra = [];
    }
    push(letra){
        this.palavra.push(letra);
    }
    pop(){
        return this.palavra.pop();
    }
    isEmpty(){
        return this.palavra.length === 0;
    }
}

class inverter{
    static inverte(palavra){
        const pilha = new Pilha();
        let strInverte = "";
        for(let letra of palavra){
            pilha.push(letra);
        }
        while(!pilha.isEmpty()){
            strInverte += pilha.pop();
        }
        return strInverte;
    }
}

console.log(inverter.inverte("ABACAXI"));