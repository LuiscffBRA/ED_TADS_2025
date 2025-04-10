// Classe que representa o estacionamento de caminhões
class Estacionamento {
    // O construtor inicializa a capacidade do estacionamento e a lista de caminhões estacionados
    constructor(capacidade = 10) {
        // Definindo a capacidade máxima do estacionamento (padrão é 10)
        this.capacidade = capacidade; 
        // Inicializando a lista que irá armazenar os caminhões
        this.estacionados = [];
    }

    // Método para adicionar um caminhão ao estacionamento
    adicionarCaminhao(caminhao) {
        // Verificando se o estacionamento já atingiu a capacidade máxima
        if (this.estacionados.length >= this.capacidade) {
            console.log("O estacionamento está cheio!");  // Mensagem de erro quando a capacidade é atingida
            return; // Retorna e não adiciona mais caminhões
        }
        // Caso o estacionamento tenha espaço, adiciona o caminhão no final da lista
        this.estacionados.push(caminhao);
        console.log(`${caminhao} foi adicionado ao estacionamento.`); // Confirmação de que o caminhão foi adicionado
    }

    // Método para remover o caminhão que ficou mais tempo no estacionamento (FIFO)
    removerCaminhao() {
        // Verificando se o estacionamento está vazio
        if (this.isVazio()) {
            console.log("O estacionamento está vazio.");  // Mensagem de erro quando não há caminhões para remover
            return null; // Retorna null se não houver caminhões
        }
        // Remove o primeiro caminhão da lista (FIFO - First In, First Out)
        const removido = this.estacionados.shift();
        console.log(`${removido} saiu do estacionamento.`);  // Mensagem de confirmação sobre o caminhão removido
        return removido;  // Retorna o caminhão removido
    }

    // Método que verifica se o estacionamento está vazio
    isVazio() {
        return this.estacionados.length === 0;  // Retorna true se a lista de caminhões estiver vazia, caso contrário retorna false
    }

    // Método que verifica se o estacionamento está cheio
    isCheio() {
        return this.estacionados.length === this.capacidade;  // Retorna true se a lista de caminhões atingiu a capacidade máxima
    }

    // Método que retorna o caminhão que está na frente da fila (primeiro da lista)
    caminhãoFrente() {
        // Se o estacionamento estiver vazio, retorna null
        return this.isVazio() ? null : this.estacionados[0];  // Retorna o primeiro caminhão ou null
    }

    // Método que lista todos os caminhões estacionados
    listarCaminhoes() {
        // Se o estacionamento estiver vazio, exibe mensagem de que não há caminhões
        if (this.isVazio()) {
            console.log("Não há caminhões no estacionamento.");
            return;  // Não realiza mais nada, já que o estacionamento está vazio
        }
        // Se houver caminhões, lista todos na tela
        console.log("Caminhões estacionados:", this.estacionados.join(", ")); // Exibe todos os caminhões estacionados, separados por vírgula
    }
}

// Testando a classe Estacionamento

// Criando uma nova instância da classe Estacionamento, com capacidade 10 (padrão)
const estacionamento = new Estacionamento();

// Adicionando caminhões ao estacionamento
estacionamento.adicionarCaminhao("Caminhão A");  // Adiciona o caminhão "Caminhão A"
estacionamento.adicionarCaminhao("Caminhão B");  // Adiciona o caminhão "Caminhão B"
estacionamento.adicionarCaminhao("Caminhão C");  // Adiciona o caminhão "Caminhão C"
estacionamento.listarCaminhoes();  // Lista todos os caminhões que estão estacionados

// Removendo o primeiro caminhão da fila (o que entrou primeiro)
console.log("Saindo:", estacionamento.removerCaminhao());  // Remove "Caminhão A" (o primeiro da fila)

// Verificando qual caminhão está na frente da fila após a remoção
console.log("Caminhão na frente:", estacionamento.caminhãoFrente());  // Exibe o próximo caminhão, que é o "Caminhão B"

// Verificando se o estacionamento está vazio ou cheio
console.log("O estacionamento está vazio?", estacionamento.isVazio() ? "Sim" : "Não");  // Checa se a lista está vazia
console.log("O estacionamento está cheio?", estacionamento.isCheio() ? "Sim" : "Não");  // Checa se a lista atingiu a capacidade

// Continuamos adicionando caminhões até alcançar o limite de capacidade do estacionamento (10)
for (let i = 1; i <= 8; i++) {
    // Adiciona os caminhões "Caminhão D", "Caminhão E", ..., até "Caminhão L"
    estacionamento.adicionarCaminhao(`Caminhão ${String.fromCharCode(68 + i)}`);
}

// Tentando adicionar mais um caminhão após atingir a capacidade máxima
estacionamento.adicionarCaminhao("Caminhão Z");  // Não será adicionado pois a capacidade máxima foi atingida

// Listando novamente todos os caminhões que estão estacionados
estacionamento.listarCaminhoes();

// Verificando novamente se o estacionamento está cheio
console.log("O estacionamento está cheio?", estacionamento.isCheio() ? "Sim" : "Não");
