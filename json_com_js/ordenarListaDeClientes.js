//ordenar os dados da lista
function ordenar(lista, propriedade){
    const listaOrdenada  = lista.sort((a,b) => {
        return a[propriedade] < b[propriedade]? -1 : 1;
    })

    return listaOrdenada;
}

console.log(ordenar(dados, "nome"))