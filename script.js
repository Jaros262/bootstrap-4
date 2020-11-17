const vypocet = document.getElementById('vypocet');
const c1 = document.getElementById('c1');
const vysledek = document.getElementById('vysledek');
const vzorceDruhy = [
    { vyber: 'povrch',},
    { vyber: 'objem',},
    { vyber: 'telU',},
    { vyber: 'stenU',}
]


c1.addEventListener('input', function(){
    c1.innerText = c1;
})


/*vypocet.addEventListener('click', function(){
    console.log('done');
    vysledek.innerText = c1.value * c1.value * 6;
    console.log(vypocet);
})*/

povrch.addEventListener('click', function(){
    console.log('done');
    vysledek.innerText = c1.value * c1.value * 6;
    console.log(vypocet);
})