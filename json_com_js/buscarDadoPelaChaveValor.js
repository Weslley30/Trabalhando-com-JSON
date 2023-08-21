//buscar dado de um cliente pela chave-valor
function EncontrarRegistro(lista, chave, valor){
    return lista.find((registro) => registro[chave].includes(valor));
}

console.log("Dados de cliente encontrado", EncontrarRegistro(dados, "telefone", "35969848931"));