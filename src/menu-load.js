function menuLoad() {
    let container = document.getElementById('content');

    // container.style['grid-template-rows'] = '50px';
    // container.style['gap'] = '0px';

    let title = document.createElement('div');
    title.textContent = 'MENU';
    title.className = 'title';

    container.append(title);
    fasting(container);
    nonFasting(container);
}

function fasting(container) {
    let vegan = document.createElement('div');
    vegan.textContent = 'Vegan Dishes';
    vegan.className = 'title';

    let misir = document.createElement('div');
    misir.textContent = 'Misir';

    let mPrice = document.createElement('div');
    mPrice.textContent = '$15';

    let shiro = document.createElement('div');
    shiro.textContent = 'Shiro';

    let sPrice = document.createElement('div');
    sPrice.textContent = '$13';

    let alecha = document.createElement('div');
    alecha.textContent = 'Alecha';

    let aPrice = document.createElement('div');
    aPrice.textContent = '$15';

    let gomen = document.createElement('div');
    gomen.textContent = 'Gomen';

    let gPrice = document.createElement('div');
    gPrice.textContent = '$12';

    let fasolia = document.createElement('div');
    fasolia.textContent = 'Fasolia';

    let fPrice = document.createElement('div');
    fPrice.textContent = '$12';

    container.append(vegan, misir, mPrice, shiro, sPrice, alecha, aPrice, 
        gomen, gPrice, fasolia, fPrice);
}

function nonFasting(container) {
    let nonFasting = document.createElement('div');
    nonFasting.textContent = 'Non-Fasting Dishes';
    nonFasting.className = 'title';

    let tibs = document.createElement('div');
    tibs.textContent = 'Awaze Tibs';

    let tPrice = document.createElement('div');
    tPrice.textContent = '$25';

    let kitfo = document.createElement('div');
    kitfo.textContent = 'Kitfo';

    let kPrice = document.createElement('div');
    kPrice.textContent = '$25';

    let doro = document.createElement('div');
    doro.textContent = 'Doro Wot';

    let dPrice = document.createElement('div');
    dPrice.textContent = '$35';

    let dulet = document.createElement('div');
    dulet.textContent = 'Dulet';

    let dulPrice = document.createElement('div');
    dulPrice.textContent = '$30';

    container.append(nonFasting, tibs, tPrice, kitfo, kPrice, doro, dPrice,
         dulet, dulPrice);
}

export { menuLoad }