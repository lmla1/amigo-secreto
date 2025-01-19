let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById('amigo');
    let nombreDeAmigo = amigo.value;

    if (nombreDeAmigo == "") {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreDeAmigo);

    let listaDeAmigos = document.getElementById('listaAmigos');
    const li = document.createElement('li');
    li.innerHTML = nombreDeAmigo;
    listaDeAmigos.appendChild(li);

    amigo.value = "";
    amigo.focus();
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indiceRandom = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = amigos[indiceRandom];
    }
}
