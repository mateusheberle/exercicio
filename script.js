class Parquimetro {
    constructor(valor) {
        this.valor = valor;
    }

    calcular() {
        if (this.valor < 1) {
            return "Valor insuficiente para estacionar.";
        }

        let tempo;
        let troco;

        if (this.valor >= 3) {
            tempo = 120; // 2 horas
            troco = this.valor - 3;
        } else if (this.valor >= 1.75) {
            tempo = 60; // 1 hora
            troco = this.valor - 1.75;
        } else {
            tempo = 30;
            troco = this.valor - 1;
        }

        return { tempo, troco };
    }
}

const btnCalcular = document.getElementById("calcular");

btnCalcular.addEventListener("click", () => {
    const valor = Number(document.getElementById("valor").value);

    const parquimetro = new Parquimetro(valor);

    const resultado = parquimetro.calcular();

    const divResultado = document.getElementById("resultado");

    if (resultado.mensagem) {
        divResultado.innerHTML = resultado.mensagem;
    } else {
        divResultado.innerHTML = `
            Tempo: ${resultado.tempo} minutos <br>
            Troco: R$ ${resultado.troco.toFixed(2)}
        `;
    }
});