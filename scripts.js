const imagem = document.getElementById('morango');
const tempoVisivel = 700; 
const tempoInvisivel = 300; 

function getPosicaoAleatoria() {
    
    const maxX = window.innerWidth - imagem.offsetWidth;
    const maxY = window.innerHeight - imagem.offsetHeight;
    
    return {
        left: Math.floor(Math.random() * maxX) + 'px',
        top: Math.floor(Math.random() * maxY) + 'px'
    };
}

function mostrarImagem() {
    const posicao = getPosicaoAleatoria();
    
    Object.assign(imagem.style, {
        left: posicao.left,
        top: posicao.top,
        display: 'block',
        opacity: '1'
    });

    setTimeout(esconderImagem, tempoVisivel);
}

function esconderImagem() {
    imagem.style.opacity = '0';
    
    setTimeout(() => {
        imagem.style.display = 'none';
        mostrarImagem(); 
    }, tempoInvisivel);
}
window.onload = mostrarImagem;
