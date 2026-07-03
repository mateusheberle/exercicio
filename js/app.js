// Modularização
import { Categoria, ListaGastosPorCategoria } from "./classes.js";
import { valorNegativo, atualizarInterface } from "./utils.js";

// POO
const gastosPorCategoria = new ListaGastosPorCategoria(
    new Categoria("Alimentação"),
    new Categoria("Transporte"),
    new Categoria("Lazer"),
    new Categoria("Outros")
);

// Manipulação do DOM
const formulario = document.querySelector("form");

formulario.addEventListener("submit", (event) => {  
    // Prevenção do comportamento padrão
    event.preventDefault();

    const valorInformado = formulario.valor.value;
    const categoriaInformada = formulario.categoria.value;

    if (valorNegativo(valorInformado)) {
        alert("Valor não pode ser negativo");
        return;
    }

    const categoria = gastosPorCategoria.obterCategoriaPorNome(categoriaInformada);
    categoria.adicionarValor(valorInformado);
    
    atualizarInterface(gastosPorCategoria);
    formulario.reset();

});