function calcularIMC() {

    // Entrada
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Processamento IMC
    let imc = peso / (altura * altura);
    
    // Classificação
    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc < 25) {
        classificacao = 'Peso normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }
    
    // Saída
    document.getElementById('resultado').textContent = `IMC: ${imc.toFixed(2)}`;
    document.getElementById('classificacao').textContent = `Classificação: ${classificacao}`;

}
