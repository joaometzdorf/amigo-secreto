let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if(amigo.value == '') {
        alert('Informe um nome.');
        return;
    }

    if(amigos.includes(amigo.value)) {
        alert('Não pode nome repetido.')
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if(listaAmigos.textContent == ''){
        listaAmigos.textContent = amigo.value;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 pessoas.')
        return;
    }

    embaralha(amigos);
    let listaSorteio = document.getElementById('lista-sorteio');

    for (let indice = 0; indice < amigos.length; indice++) {
    
        if(indice == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[indice] + ' --> ' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[indice] + ' --> ' + amigos[indice + 1] + '<br>';
}
    }
}

function embaralha(lista) {
    for (let i = lista.length; i; i--) {
        const j = Math.floor(Math.random() * i);
        [lista[i - 1], lista[j]] = [lista[j], lista[i - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
