// "Encontre o título principal pelo ID"
let titulo = document.querySelector('#titulo-principal');
console.log(titulo); 





// "Liste todos os itens do menu usando CLASSE"
let intens_menu = document.querySelectorAll('.menu-item');
console.log(intens_menu);





// "Encontre a seção de CSS usando querySelector"
let secaoCSS = document.querySelector('#card-css');
console.log(secaoCSS);





// "Altere o texto do rodapé"
let rodape = document.getElementById('rodape-texto');
rodape.textContent = 'Livinha -> (alterou o texto do rodapé) ';
console.log(rodape);





// "Mude a cor de todos os itens da lista HTML"
let substitulo = document.querySelector('#card-html ul').style.color = 'blue';
console.log(substitulo);





// "Destaque o card de CSS com uma borda vermelha"
let cardCSS = document.querySelector('#card-css').style.border = '10px solid red';
console.log(cardCSS);




// "Descubra qual é o elemento pai do botão Enviar"
let botaoEnviar = document.querySelector('form');
console.log(botaoEnviar);





// "Liste todos os filhos da seção HTML"
let filhos_HTML = document.querySelector('#sec-html').children;
console.log(filhos_HTML);





// "Faça aparecer o conteúdo secreto removendo a classe oculto"
const conteudoSecreto = document.querySelector('#segredo');
conteudoSecreto.style.display = 'block';





