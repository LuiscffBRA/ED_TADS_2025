class DecToBin{
    constructor(){
        this.binario = [];
    }
    converter(decimal){
        while(decimal > 0){
            let resto = decimal % 2;
            this.binario.push(resto);
            decimal = Math.floor(decimal / 2);
        }
        let resultado = '';
        while (this.binario.length > 0) {
            resultado += this.binario.pop();
        }
        return resultado;
    }
}
let conversor = new DecToBin();
console.log(conversor.converter(13));

