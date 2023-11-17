const frasesNatal = [
    "Feliz Natal e um próspero Ano Novo!",
    "Que a magia do Natal encha seu coração de amor e esperança.",
    "Desejo a você e sua família um Natal cheio de alegria e felicidade.",
    "Que a luz do Natal brilhe em cada lar e traga paz ao mundo.",
    // Adicione mais frases conforme necessário
];

const botaoGerarFrase = document.getElementById("gerarFraseBtn");
const fraseGerada = document.getElementById("fraseGerada");

function gerarFrase() {
    const indice = Math.floor(Math.random() * frasesNatal.length);
    fraseGerada.textContent = frasesNatal[indice];
}

botaoGerarFrase.addEventListener("click", gerarFrase);
