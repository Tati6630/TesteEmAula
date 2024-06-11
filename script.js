let frutas = [];
let precos = [];

function cadastro(){
    let fruta = document.getElementById('fruta').value;
    let preco = Number(document.getElementById('preco').value );

    frutas.push(fruta);
    precos.push(preco);
    let mensagem = 'Lista de Frutas';
    if ((preco <= 0) || (fruta === '')){
       document.getElementById('lista').innerHTML = 'Os campos não podem permanecer em branco';
       return;

    if(frutas.indexOf(fruta) == -1){
        document.getElementById('lista').innerHTML = 'Essa fruta já foi cadastrada';
        return;

    let mensagem = 'Lista de Frutas';
    for(let produto of frutas){
        let posicao = frutas.indexOf(produto);     //indexOf = retorna exatamente a posição de um elemento
        mensagem +='<br>' + produto + '  | Preço: ' + precos[posicao];

    } 
    document.getElementById('lista').innerHTML = mensagem;
    }
    }
    
}
    
