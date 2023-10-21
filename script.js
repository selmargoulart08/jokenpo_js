const pedra = document.getElementById("pedra");
const papel = document.getElementById("papel");
const tesoura = document.getElementById("tesoura");
const jogador = document.getElementById("jogador");
const computador = document.getElementById("computador");
const resultado = document.getElementById("resultado");

const escolhas = ["pedra", "papel", "tesoura"];

function escolherJogadaComputador() {
    const indice = Math.floor(Math.random() * 3);
    return escolhas[indice];
}

function verificarResultado(escolhaJogador, escolhaComputador) {
    if (escolhaJogador === escolhaComputador) {
        return "Empate";
    } else if (
        (escolhaJogador === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaJogador === "papel" && escolhaComputador === "pedra") ||
        (escolhaJogador === "tesoura" && escolhaComputador === "papel")
    ) {
        return "Você ganhou!";
    } else {
        return "Você perdeu!";
    }
}

pedra.addEventListener("click", () => jogar("pedra"));
papel.addEventListener("click", () => jogar("papel"));
tesoura.addEventListener("click", () => jogar("tesoura"));

function jogar(escolhaJogador) {
    const escolhaComputador = escolherJogadaComputador();
    const resultadoJogo = verificarResultado(escolhaJogador, escolhaComputador);
    
    jogador.textContent = `Você escolheu: ${escolhaJogador}`;
    computador.textContent = `O computador escolheu: ${escolhaComputador}`;
    resultado.textContent = `Resultado: ${resultadoJogo}`;
    
    resultado.style.display = "block";
}

