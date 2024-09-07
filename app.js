function buscar() {
    const termoBusca = document.querySelector('input[type="text"]').value.toLowerCase(); 

    const resultadosFiltrados = dados.filter(dado => 
        dado.titulo.toLowerCase().includes(termoBusca) || 
        dado.descricao.toLowerCase().includes(termoBusca) ||
        dado.tags.toLocaleLowerCase().includes(termoBusca)
    );

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(!campoPesquisa){
        section.innerHTML = "<P>Nada foi encontrado. Você precisa digitar um termo de busca</p>"
        return
    }
    console.log(campoPesquisa);

    let resultadosHTML = "";

    if (resultadosFiltrados.length > 0) {
        for (let dado of resultadosFiltrados || dado.descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultadosHTML += `
            <div class="item-resultado">
                <h2>
                    <a href=${dado.link} target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
            `;
        }
    } else {
        resultadosHTML = "<p>Nenhum resultado encontrado.</p>";
    }
    

    section.innerHTML = resultadosHTML;
}

