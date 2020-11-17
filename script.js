const vypocet1 = document.getElementById('vypocet1');
const vypocet2 = document.getElementById('vypocet2');
const vypocet3 = document.getElementById('vypocet3');
const vypocet4 = document.getElementById('vypocet4');
const c1 = document.getElementById('c1');
const povrch = document.getElementById('povrch');
const objem = document.getElementById('objem');
const telU = document.getElementById('telU');
const stenU = document.getElementById('stenU');
const zaokrouhleni = document.getElementById('zaokrouhleni');

c1.addEventListener('input', function(){
    c1.innerText = c1;
})


povrch.addEventListener('click', function(){
    console.log('choosed path');
    vypocet1.innerText = c1.value * c1.value * 6;
})

objem.addEventListener('click', function(){
    console.log('choosed path 2');
    vypocet2.innerText = c1.value * c1.value * c1.value;
})

telU.addEventListener('click', function(){
    console.log('choosed path 3');
    vypocet3.innerHTML = c1.value * Math.sqrt("3");
    
})

stenU.addEventListener('click', function(){
    console.log('choosed path 4');
    vypocet4.innerText = c1.value * Math.sqrt("2");
})
