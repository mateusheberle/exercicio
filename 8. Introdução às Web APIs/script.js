document.getElementById('cep').addEventListener('blur', (evento) => {
    const elemento = evento.target;
    const cepInformado = elemento.value;

    if (!(cepInformado.length === 8))
        return;

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then((resposta) => resposta.json())
        .then((data) => {
            if (!(data.erro)) {
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            } else {
                alert('CEP não encontrado');
            }
        })
        .catch((erro) => {
            console.error(erro);
        });

});

document.getElementById('formulario').addEventListener('submit', (evento) => {
    evento.preventDefault();    
    const cep = document.getElementById('cep').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;

    console.log(`CEP: ${cep}, Cidade: ${cidade}, Estado: ${estado}`);

    const endereco = {
        cep,
        cidade,
        estado
    };

    localStorage.setItem('endereco', JSON.stringify(endereco));

});

document.addEventListener('DOMContentLoaded', () => {
    const enderecoSalvo = localStorage.getItem('endereco');

    if (enderecoSalvo) {
        const endereco = JSON.parse(enderecoSalvo);
        document.getElementById('cep').value = endereco.cep;
        document.getElementById('cidade').value = endereco.cidade;
        document.getElementById('estado').value = endereco.estado;
    }
});