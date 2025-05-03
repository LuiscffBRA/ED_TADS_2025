function verificarVencedoresMegaSena(numerosSorteados, apostas) {
    // Verifica se os números sorteados são válidos
    if (!Array.isArray(numerosSorteados) || numerosSorteados.length !== 6) {
        throw new Error("Os números sorteados devem ser um array com 6 números");
    }

    // Verifica se as apostas são válidas
    if (!Array.isArray(apostas) || apostas.length === 0) {
        throw new Error("As apostas devem ser um array não vazio");
    }

    // Converte os números sorteados para um Set para facilitar a comparação
    const sorteadosSet = new Set(numerosSorteados);

    // Objeto para armazenar os resultados
    const resultados = {
        sena: [],
        quina: []
    };

    // Verifica cada aposta
    apostas.forEach((aposta, indexJogador) => {
        // Verifica se a aposta é válida (array com 6 a 15 números entre 1 e 60)
        if (!Array.isArray(aposta) || aposta.length < 6 || aposta.length > 15) {
            console.warn(`Aposta do jogador ${indexJogador + 1} inválida: deve ter entre 6 e 15 números`);
            return;
        }

        // Conta quantos números foram acertados
        const acertos = aposta.filter(num => sorteadosSet.has(num)).length;

        // Classifica a aposta
        if (acertos === 6) {
            resultados.sena.push(indexJogador + 1); // +1 para jogador 1-based
        } else if (acertos === 5) {
            resultados.quina.push(indexJogador + 1);
        }
    });

    return resultados;
}

// Exemplo de uso:
const numerosSorteados = [5, 12, 23, 34, 45, 56];
const apostas = [
    [5, 12, 23, 34, 45, 56],    // Sena (6 acertos)
    [5, 12, 23, 34, 45, 55],    // Quina (5 acertos)
    [5, 12, 23, 34, 44, 55],    // Quadra (4 acertos)
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], // Aposta com 15 números
    [5, 12, 23, 34, 45, 56, 57], // Sena com número extra
    [1, 2, 3, 4, 5, 6]           // Nenhum acerto
];

const resultado = verificarVencedoresMegaSena(numerosSorteados, apostas);
console.log(resultado);