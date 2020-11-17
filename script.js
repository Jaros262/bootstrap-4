const vypocet1 = document.getElementById('vypocet1');
const vypocet2 = document.getElementById('vypocet2');
const vypocet3 = document.getElementById('vypocet3');
const vypocet4 = document.getElementById('vypocet4');
const c1 = document.getElementById('c1');
const vysledek = document.getElementById('vysledek');
const povrch = document.getElementById('povrch');
const objem = document.getElementById('objem');
const telU = document.getElementById('telU');
const stenU = document.getElementById('stenU');
/*const vzorceDruhy = [
    { vyber: 'povrch', povrch},
    { vyber: 'objem', objem},
    { vyber: 'telU', telU},
    { vyber: 'stenU', stenU}
]*/


c1.addEventListener('input', function(){
    c1.innerText = c1;
})


/*vypocet.addEventListener('click', function(){
    console.log('done');
    vysledek.innerText = c1.value * c1.value * 6;
    console.log(vypocet);
})*/

/*vypocet.addEventListener('click', function(){
    console.log('button clicked');
    vysledek.innerText = c1.value * c1.value * 6;
    povrch.innerHTML = 'Povrch =' (vypocet);
    console.log(vypocet);
})*/

/*povrch.addEventListener('click', function(){
    console.log('choosed path');
    vysledek.innerText = c1.value * c1.value * 6;
    console.log(vysledek);
})*/

povrch.addEventListener('click', function(){
    console.log('choosed path');
    return vypocet1;
})

objem.addEventListener('click', function(){
    console.log('choosed path 2');
    return vypocet2;
})

vypocet1.addEventListener('click', function(){
    console.log('button clicked');
    vysledek.innerText = c1.value * c1.value * 6;
    console.log(vysledek);
})

vypocet2.addEventListener('click', function(){
    console.log('button clicked');
    vysledek.innerText = c1.value * c1.value * c1.value;
    console.log(vysledek);
})