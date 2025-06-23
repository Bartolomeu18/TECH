
function displayMenu() {
    
var menu = document.getElementById('menuitens')
if (menu.style.width=='50%') {
    menu.style.width='0%'
}else{
    menu.style.width='50%'

}
}

//efito loading

// Simula o carregamento da página (remova isso em produção)
function simulateLoading() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 2000); // 2 segundos de simulação
    });
}

// Quando a página estiver totalmente carregada
window.addEventListener('load', async function() {
    // Simula um tempo de carregamento (remova em produção)
    await simulateLoading();
    
    // Esconde o loading
    document.getElementById('loading').style.display = 'none';
    
    // Mostra o conteúdo
    document.getElementById('content').style.display = 'block';
});