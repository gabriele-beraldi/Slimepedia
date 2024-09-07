function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p class= 'mensagem-erro'> Nenhuma slime encontrada :(</P>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="item-resultado">
            <img src= "${dado.imagem}" alt= "">
            <h2 class="item-resultado h2">${dado.titulo}</h2>
            <p>${dado.descricao}</p>
            <ul>
                <li><b>Dieta: </b>${dado.primeira}</li>
                <li><b>Favorito: </b>${dado.segunda}</li>
            </ul>
            <a href="${dado.link}" target="_blank" >Mais informações.</a>
        </div>
        `;
    }

}
    if (!resultados) {
    resultados = "<p class= 'mensagem-erro'>Não existe essa slime aqui!!</p>"
}

    section.innerHTML = resultados;
}