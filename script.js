const clientes = document.getElementById('listaClientes');

const link = "https://crudcrud.com/api/02799f4561a1413b82b497c143bfd4a7";

function carregarClientes() {
    
    clientes.innerHTML = '';

    fetch(`${link}/clientes`, {
        method: 'GET'
    })
        .then(resposta => resposta.json())
        .then((listaDeClientes) => {
            listaDeClientes.forEach((cliente) => {
                const item = document.createElement('li');
                item.innerHTML = `${cliente.nome} <button onclick="remove('${cliente._id}', this.parentElement)">Remover</button>`;
                clientes.appendChild(item);
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

carregarClientes();

document.getElementById('add').addEventListener('click', () => {
    const nome = document.getElementById('cliente').value;

    fetch(`${link}/clientes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome: nome })
    })
        .then(resposta => resposta.json())
        .then((cliente) => {
            carregarClientes();
        })
        .catch((error) => {
            console.log(error);
        });
});

function remove(id, elemento) {
    fetch(`${link}/clientes/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(() => {
            carregarClientes();
        })
        .catch((error) => {
            console.log(error);
        });

}
