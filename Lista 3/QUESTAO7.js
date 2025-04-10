// Função que resolve o problema de Josephus
function josephus(N, D) {
    // Inicializa uma lista de soldados, numerados de 1 até N.
    let soldados = [];
    for (let i = 1; i <= N; i++) {
        soldados.push(i);
    }

    // O índice de onde começamos a contagem.
    let indice = 0;

    // A lista para armazenar a ordem em que os soldados são eliminados.
    let ordemEliminados = [];

    // Enquanto houver mais de um soldado, continuamos o processo de eliminação.
    while (soldados.length > 1) {
        // Calcula o próximo índice a ser removido.
        // A contagem começa no índice atual e vai até o índice D-1. Utilizamos a operação de módulo
        // para garantir que, caso o índice ultrapasse o tamanho da lista, ele volte ao início.
        indice = (indice + D - 1) % soldados.length;

        // Adiciona o soldado eliminado à ordem de eliminação.
        let eliminado = soldados.splice(indice, 1)[0];
        ordemEliminados.push(eliminado);

        // O próximo soldado a ser contado é agora o que fica na posição atual.
        // A contagem começa a partir do soldado seguinte, e o índice é atualizado.
    }

    // O último soldado restante na lista é o vencedor (aquele que escapa).
    let ultimoSoldado = soldados[0];

    // Retorna a ordem de eliminações e o soldado que escapa.
    return { ordemEliminados, ultimoSoldado };
}

// Testando a função
let N = 41;  // Número de soldados
let D = 3;   // A cada 3 soldados, um é eliminado

// Chamando a função de Josephus
let resultado = josephus(N, D);

// Exibindo os resultados
console.log("Ordem das eliminações: ", resultado.ordemEliminados);
console.log("Último soldado restante (o que escapa): ", resultado.ultimoSoldado);
