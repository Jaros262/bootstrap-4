const c1 = document.getElementById('c1');
const vysledek = document.getElementById('vysledek');
const vyber = [
    { option: 'S', value: function() { return 6 * Math.pow(c1.value,2)} },
    { option: 'V', value: function() { return Math.pow(c1.value,3)} },
    { option: 'u', value: function() { return c1.value * Math.sqrt('3')} },
    { option: 'us', value: function() { return c1.value * Math.sqrt('2')} }
]


c1.addEventListener('input', function(){
    c1.innerText = c1;
})

vysledek.addEventListener('click', function(){
    /* Ukázka, jak můžete ze seznamu s id "vyber" zjistit zrovna vybranou hodnotu */
    console.log(document.getElementById('vyber').value);
    /* Pomocí metody find můžete v poli objektů vyber najít objekt podle uživatelovy volby v seznamu
    a využít výpočtové funkce value() k zobrazení výsledku */
    let vypocet = vyber.find(function(obj) { return obj.option === document.getElementById('vyber').value});
    console.log(vypocet.value());
    document.getElementById('vypocet').innerHTML = `${document.getElementById('vyber').value} = ${vypocet.value().toFixed(2)}`;
})