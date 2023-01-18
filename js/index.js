// console.log(data);

let listCarrinho = [];
let cont = 0;
let soma = 0;

//Este if é para poder mostrar o texto do carrinho vazio no carrinho de compras.
if (cont == 0) {
    let carrinho = document.querySelector('.ul-carrinho');
    console.log(carrinho)

    let h1 = document.createElement('h1');
    h1.innerText = 'Carrinho vazio';
    h1.className = 'h1Carrinho'
     
    carrinho.appendChild(h1);
}

//Função para criar os CARDS. 
function criaCards(list) {

    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    for (let i = 0; i < list.length; i++) {

        let listCard = list[i];
        // console.log(listCard);


        let li = document.createElement('li');
        li.className = 'card-camiseta';
        ul.appendChild(li);

        let div = document.createElement('div');
        div.className = 'img-card';
        li.appendChild(div);

        let img = document.createElement('img');
        img.src = listCard.img;
        div.appendChild(img);

        let a = document.createElement('a');
        a.innerHTML = listCard.tag;
        a.className = 'card-a'
        li.appendChild(a);

        let h3 = document.createElement('h3');
        h3.innerHTML = listCard.nameItem;
        li.appendChild(h3);

        let pCard = document.createElement('p');
        pCard.innerHTML = listCard.description;
        li.appendChild(pCard);

        let pPreco = document.createElement('p');
        pPreco.innerHTML = `R$ ${listCard.value}`;
        pPreco.className = 'p-preco'
        li.appendChild(pPreco);

        let button = document.createElement('button');
        button.innerHTML = 'Adicionar ao Carrinho';
        button.className = 'card-button';
        button.id = listCard.id;
        button.addEventListener('click', addCarrinhoCompras);
        li.appendChild(button);

    }

    return
}

criaCards(data);


//Função para fazer a soma total dos produtos e mostrar quantos itens tem no carrinho.
function somaTudo() {

    let divTotal = document.querySelector('.div-carrinho');

    let pQuantidade = document.createElement('p');
    pQuantidade.innerHTML = '';
    pQuantidade.className = 'pQuantidade'

    let pTotal = document.createElement('p');
    pTotal.className = 'pTotal'
    pTotal.innerHTML = '';

    divTotal.appendChild(pQuantidade);
    divTotal.appendChild(pTotal);

}

somaTudo();

//Função para adicionar os produtos no carrinho e remove-los também.
function addCarrinhoCompras(event) {

    let achaId = data.find(element => element.id == event.target.id);
    console.log(achaId);
    listCarrinho.push(achaId);

    let ulCarrinho = document.getElementsByClassName('ul-carrinho')[0];
    ulCarrinho.innerHTML = '';

    soma = 0;
    cont = 0;

    for (let i = 0; i < listCarrinho.length; i++) {

        let produtoAdd = listCarrinho[i];

        let liCarrinho = document.createElement('li');
        liCarrinho.className = 'li-carrinho';
        ulCarrinho.appendChild(liCarrinho);

        let divImgCarrinho = document.createElement('div');
        liCarrinho.appendChild(divImgCarrinho);

        let imgCarrinho = document.createElement('img');
        imgCarrinho.src = produtoAdd.img;
        imgCarrinho.className = 'img-carrinho';
        divImgCarrinho.appendChild(imgCarrinho);

        let divCarrinhoDesc = document.createElement('div');
        liCarrinho.appendChild(divCarrinhoDesc);

        let h4Carrinho = document.createElement('h4');
        h4Carrinho.innerHTML = produtoAdd.nameItem;
        divCarrinhoDesc.appendChild(h4Carrinho);

        let pCarrinho = document.createElement('p');
        pCarrinho.innerHTML = `R$${produtoAdd.value}`;
        divCarrinhoDesc.appendChild(pCarrinho);

        let pQuant = document.querySelector('.pQuantidade');
        cont++;
        pQuant.innerHTML = `Quantidade: ${cont}`;

        let pSoma = document.querySelector('.pTotal');
        soma += produtoAdd.value
        pSoma.innerHTML = `Total: R$${soma}`

        let buttonCarrinho = document.createElement('button');
        buttonCarrinho.className = 'btn-carrinho';
        buttonCarrinho.innerHTML = 'Remover Produto';
        buttonCarrinho.addEventListener('click', removeProduto);
        divCarrinhoDesc.appendChild(buttonCarrinho);

        function removeProduto() {


            listCarrinho.splice(listCarrinho.indexOf(achaId), 1);

            liCarrinho.remove();


            soma -= produtoAdd.value
            pSoma.innerHTML = `Total: ${soma}`


            cont--;
            pQuant.innerHTML = `Quantidade: ${cont}`;

            if (cont == 0) {
                let carrinho = document.querySelector('.ul-carrinho');
                console.log(carrinho)

                let h1 = document.createElement('h1');
                h1.innerText = 'Carrinho vazio';
                h1.className = 'h1Carrinho'

                let pQuan = document.querySelector('.pQuantidade');
                let pTot = document.querySelector('.pTotal');
            
                pQuan.innerHTML = '';
                pTot.innerHTML = '';

                carrinho.appendChild(h1);
            }

        }


    }

}


//Aqui estou renderizando apenas a função de criarCards, pois é onde eu renderizo todos os cards.
let todos = document.querySelector('#todos').addEventListener('click', () => {

    criaCards(data);

});

//Aqui estou pedindo pra renderizar todos os cards pra quando clicar na logo.
let logo = document.querySelector('#logo').addEventListener('click', () => {

    criaCards(data);

});


//Uma função para renderizar os cards com as tags que possuem a tag 'Camisetas'
let camisetas = document.querySelector('#camisetas').addEventListener('click', () => {

    let listaCamisetas = [];

    data.forEach((e) => {
        console.log(e.tag[0]);

        if (e.tag[0] == 'Camisetas') {
            listaCamisetas.push(e);
        }
    })

    criaCards(listaCamisetas);
});


//Uma função para renderizar os cards com as tags que possuem a tag 'Acessórios'
let acessorios = document.querySelector('#acessorios').addEventListener('click', () => {

    let listAcessorios = [];

    data.forEach((e) => {
        console.log(e.tag[0]);

        if (e.tag[0] == 'Acessórios') {
            listAcessorios.push(e);
        }
    })

    criaCards(listAcessorios);
});


//Aqui eu resolvi colocar um aviso que a loja não possui calçados ou que está fora de estoque.
let calcados = document.querySelector('#calcados').addEventListener('click', () => {

    let ul = document.querySelector('ul');
    ul.innerHTML = '';

    let li = document.createElement('li');
    li.className = 'li-calcado';
    li.innerText = 'Itens fora de estoque :('

    let img = document.createElement('img');
    img.src = 'https://i.pinimg.com/originals/f9/7b/8c/f97b8c7512b5b29f12800850183a2599.gif'
    img.className = 'img-calcados'

    li.appendChild(img);
    ul.appendChild(li);
});


//Uma função pra pesquisar o VALUE do input e através desse value, renderizar com o click os cards na tela. 
let pesquisa = document.querySelector('#btn-pesquisa').addEventListener('click', () => {

    let input = document.querySelector('#input-pesquisa');
    let inputValue = input.value;
    let inputNormalized = inputValue.toLowerCase();

    let contador = 0;

    let inputItens = [];

    console.log(inputValue)
    console.log('clicou');

    for (let i = 0; i < data.length; i++) {

        let item = data[i];

        console.log(inputNormalized);

        if (item.tag[0].toLowerCase() == inputNormalized) {
            inputItens.push(item);
            contador++
        } else if (item.nameItem.toLowerCase().includes(inputNormalized)) {
            inputItens.push(item);
            contador++
        }

    }

    criaCards(inputItens);

    if (contador == 0) {

        let ulItem = document.querySelector('ul');

        let produtoNaoEncontrado = document.createElement('li');
        produtoNaoEncontrado.className = 'produtoNao';
        produtoNaoEncontrado.innerText = 'Produto não encontrado!';

        let imgProduto = document.createElement('img');
        imgProduto.src = 'https://i.pinimg.com/originals/f9/7b/8c/f97b8c7512b5b29f12800850183a2599.gif';
        imgProduto.className = 'bingo'

        produtoNaoEncontrado.appendChild(imgProduto);

        ulItem.append(produtoNaoEncontrado);

        console.log(ulItem);

    }


});
