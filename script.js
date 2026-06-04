
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const tentativas = 10;
document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativas}`;

let tentativasRestantes = tentativas;

function verificarPalpite() {

    let palpite = parseInt(document.getElementById("palpite").value);
    document.getElementById("palpite").value = "";

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Por favor, insira um número entre 1 e 100.");
        return;
    }

    if (palpite === numeroSecreto) {
        document.getElementById("mensagem").textContent = "Parabéns! Você acertou o número!";
        document.getElementById("palpite").disabled = true;
        return;
    } else {
        tentativasRestantes--;
        document.getElementById("tentativas").textContent = `Tentativas restantes: ${tentativasRestantes}`;
        if (palpite < numeroSecreto) {
            document.getElementById("mensagem").textContent = "Tente um número maior!";
        } else {
            document.getElementById("mensagem").textContent = "Tente um número menor!";
        }
    }

    if (tentativasRestantes === 0) {
        document.getElementById("mensagem").textContent = `Game Over! O número secreto era ${numeroSecreto}.`;
    }
}
