const dados = require("./cliente.json");

console.log(dados);
console.log(typeof dados);



// transformando os dados em uma string para poder salvar em qualquer outro arquivo que não ler objeto igual o Java-script
const clienteEmString = JSON.stringify(dados);

console.log(typeof clienteEmString);



//transformando uma string/objeto em um objeto pronto para ser execultado no Java-script
const objetoCliente = JSON.parse(clienteEmString);

console.log(typeof objetoCliente);