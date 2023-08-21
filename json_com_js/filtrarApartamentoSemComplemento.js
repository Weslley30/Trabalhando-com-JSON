//filtrar clientes que mora em apartamento, porém não adicionaram complemento no registro
function filtrarApartamentoSemComplemento(lista){
    return lista.filter((cliente) => {
        return (
            cliente.endereco.apartamento &&
            //verifica se existe a propriedade complemento no endereço
            !cliente.endereco.hasOwnProperty("complemento")
        );
    });
}

console.log("clientes que moram em apartamentos, porém não registraram complementos", filtrarApartamentoSemComplemento(dados));
