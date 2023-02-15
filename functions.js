let telefone = prompt('Digite o telefone');
console.log(telefone);
let mensagem = prompt('Digite a mensagem');
console.log(mensagem);


console.log(`api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`);

